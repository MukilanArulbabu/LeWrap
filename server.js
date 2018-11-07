const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');


const app = express();
const PORT = 3000;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '',
    pass: '',
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
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.post('/sendMail', (req, res) => {
  const mailfrom = req.body.email;
  const subject = `${req.body.firstName} ${req.body.lastName} - ${req.body.mobile}`;
  const bodyData = req.body.comments;
  const mailOptions = {
    from: mailfrom,
    to: 'sidhu24k@gmail.com',
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
