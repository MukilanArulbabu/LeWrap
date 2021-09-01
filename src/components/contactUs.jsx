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
        <div className="contact-main mdl-shadow--3dp">
          <div className="MuiGrid-root jss38 MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12">
            <div>
              <div className="store-title mdl-layout-title_font">We'd love to hear from you</div>
              <div className="MuiTypography-root jss39 MuiTypography-h6 MuiTypography-gutterBottom">We’re here to help and answer any question you might have.</div>
              <div className="MuiTypography-root jss39 MuiTypography-h6 MuiTypography-gutterBottom">Please reach us at
                <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M21 8V7l-3 2-3-2v1l3 2 3-2zm1-5H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1zm8-6h-8V6h8v6z" />
                </svg>
                lewrapfactorie@gmail.com /
                <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                (+91) 9176348700 | 9884829239
              </div>
            </div>
          </div>
        </div>
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
