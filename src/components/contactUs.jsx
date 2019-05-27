import React from 'react';

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.sendMail = this.sendMail.bind(this);
  }

  sendMail(e) {
    e.preventDefault();
    const fromMail = $('#email').val();
    const fname = $('#fname').val();
    const lname = $('#lname').val();
    const phone = $('#phone').val();
    const comments = $('#comments').val();
    if (fname === '') {
      $('#fname').focus();
      return false;
    }
    if (fromMail === '') {
      $('#email').focus();
      return false;
    }
    if (phone === '') {
      $('#phone').focus();
      return false;
    }
    if (comments === '') {
      $('#comments').focus();
      return false;
    }
    const sendData = {
      email: fromMail,
      firstName: fname,
      lastName: lname,
      mobile: phone,
      comments,
    };
    $.ajax({
      type: 'POST',
      url: '/sendMail',
      data: sendData,
      dataType: 'text',
      failure(err) {
        console.log(err);
      },
    });
  }


  render() {
    return (
      <div className="mdl-grid" style={{ width: '100%' }}>
        <div className="contact-us-wrap">
          <div className="store-header mdl-shadow--3dp">
            <span className="store-title mdl-layout-title_font"> Contact Us </span>
          </div>
          <div className="mdl-grid-custom-stores mdl-shadow--3dp">
            <div className="mdl-card map-card mdl-shadow--3dp" style={{ width: '100%' }}>
              <div className="container">
                <form>
                  <label htmlFor="fname">First Name</label>
                  <input type="text" id="fname" name="firstname" required placeholder="Your name.." />

                  <label htmlFor="lname">Last Name</label>
                  <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                  <label htmlFor="email">Email Address</label>
                  <input type="text" id="email" name="email" required placeholder="Your email.." />

                  <label htmlFor="phone">Mobile</label>
                  <input type="text" id="phone" name="phone" required placeholder="Your phone number.." />

                  <label htmlFor="comments">Comments</label>
                  <textarea id="comments" name="comments" placeholder="Write us something.." style={{ height: 200 }} />
                  <input type="submit" value="Submit" onClick={e => this.sendMail(e)} />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
