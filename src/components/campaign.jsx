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
        <p className="c-font">Verify your mobile number now to avail the offer!!</p>
        <div className="flex">
          <input type="number" onChange={handleChange} name="ph-no" placeholder="+91" />
          <button className="verifyBtn" onClick={sendSms}>Avail</button>
        </div>
        {msg ? (<p>{msg}</p>) : (<div />)}
      </div>
    </div>
  );
};

export default Campaign;
