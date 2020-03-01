const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const axios = require('axios');
const db = require('./db');

const app = express();
const PORT = 3000;

const apiKey = 'AB21F8FBUNJWS4N63XSJNNFHG6S2IOTG';
const apiSecret = 'NUUHGXUT0POXV5AD';
const type = 'prod';
const senderId = 'LeWrap';

const generated = [];
const generateCode = (length) => {
  try {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let text = '';
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    if (generated.indexOf(text) === -1) {
      generated.push(text);
    } else {
      generateCode();
    }
    return generated;
  } catch (err) {
    console.log(err);
  }
};


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'lewrapfactorie@gmail.com',
    pass: 'dk@123456',
  },
});

app.use(express.static(__dirname));
app.use(bodyParser.json({
  limit: '50mb',
}));
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true,
}));

db.initialize(app);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

const trackCustomerInfo = async (req, data) => {
  await axios.post(`${req.headers.origin}/api/campaign`, data);
};

const msg = (success, isExisit = false) => {
  if (success) {
    if (isExisit) {
      return 'You have already availd the offer';
    }
    return 'Your coupon code is sent to your mobile';
  }
  return 'Something went wrong';
};

app.post('/campaign', async (req, res) => {
  try {
    const { phone } = req.body;
    const dbres = await axios.get(`${req.headers.origin}/api/campaign`);
    const { data } = dbres;
    const phIdx = data.findIndex(d => d.phone === phone);
    if (phIdx === -1) {
      const code = generateCode(5)[0];
      const sms = 'Welcome to Le Wrap Factorie. Congratulations, Your voucher is active.';
      const url = `https://www.sms4india.com/api/v1/sendCampaign?apikey=${apiKey}&secret=${apiSecret}&usetype=${type}&senderid=${senderId}&phone=${phone}&message=${sms}`;
      const resData = await axios.get(url);
      if (resData.data.code === '200 OK') {
        await trackCustomerInfo(req, { phone, code, sent: true });
        return res.json({ success: true, msg: msg(true) });
      }
      await trackCustomerInfo(req, { phone, code, sent: false });
      return res.json({ success: false, msg: msg(false) });
    }
    const sms = 'You already availed this coupon. Inconvenience caused is regretted.';
    const url = `https://www.sms4india.com/api/v1/sendCampaign?apikey=${apiKey}&secret=${apiSecret}&usetype=${type}&senderid=${senderId}&phone=${phone}&message=${sms}`;
    const resData = await axios.get(url);
    if (resData.data.code === '200 OK') {
      return res.json({ success: true, msg: msg(true, true) });
    }
    return res.json({ success: false, msg: msg(false) });
  } catch (err) {
    res.json({ success: false, msg: msg(false) });
  }
});

app.post('/sendMail', (req, res) => {
  const mailfrom = req.body.email;
  const subject = `${req.body.firstName} ${req.body.lastName} - ${req.body.mobile}`;
  const bodyData = `${mailfrom} - ${req.body.comments}`;
  const mailOptions = {
    from: 'lewrapfactorie@gmail.com',
    to: 'lewrapfactorie@gmail.com',
    subject,
    text: bodyData,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.send('error');
      console.log(error);
    } else {
      res.send('sent');
      console.log(`Email sent: ${info.response}`);
    }
  });
});


app.listen(PORT);
console.log('app is running no issues;');
