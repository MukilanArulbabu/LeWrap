import React, { useState } from 'react';
import axios from 'axios';

const Campaign = () => {
  const [msg, setMsg] = useState('');
  const [phone, setPh] = useState(0);

  const handleChange = (e) => {
    setPh(e.target.value);
  };

  const sendSms = async () => {
    if (String(phone).length !== 10) {
      setMsg('Please enter 10 digit phone no');
      return false;
    }
    const res = await axios.post('/campaign', { phone });
    const { data } = res;
    setMsg(data.msg);
  };

  return (
    <div className="campaign-container">
      <div className="document">
        <p className="c-font" style={{ textAlign: 'center' }}>Verify your mobile number now to avail the offer!!</p>
        <div className="flex">
          <div style={{ textAlign: 'center' }}>
            <input type="number" onChange={handleChange} name="ph-no" placeholder="+91" />
            <button className="verifyBtn" onClick={sendSms}>Avail</button>
            <p style={{ textAlign: 'left' }}>
              <div>Terms & Conditions:</div>
              <div>-  This offer is not valid without gift voucher.</div>
              <div>- Get a French Fries Absolutely FREE... !!!</div>
              <div>- No purchase required.</div>
              <div>- This voucher can be redeemed across all the branches in Chennai.</div>
              <div>- This voucher not valid in Madurai and Ambur branches.</div>
              <div>- This voucher is not valid on home deliveries or takeaway. </div>
              <div>- Mobile number authentication required at the time of redemption.</div>
              <div>- This voucher can be used only once per mobile number.</div>
              <div>- Offer valid till 31st March 2020.</div>
            </p>
          </div>
        </div>
        {msg ? (<p>{msg}</p>) : (<div />)}
      </div>
    </div>

  );
};

export default Campaign;
