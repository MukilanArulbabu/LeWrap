import React from 'react';

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {};
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
                  <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                  <label htmlFor="lname">Last Name</label>
                  <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                  <label htmlFor="phone">Mobile</label>
                  <input type="text" id="phone" name="phone" placeholder="Your phone number.." />

                  <label htmlFor="subject">Subject</label>
                  <textarea id="subject" name="subject" placeholder="Write us something.." style={{ height: 200 }} />
                  <input type="submit" value="Submit" />
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
