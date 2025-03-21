import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/media.css';

const Franc = () => (
  <div className="container-franchize">

    <div className="document">

      <h1>Franchise Enquiry </h1>

      <hr className="brace" />

      <div className="document_3">
        <h4> Low Investment, High Returns </h4>
        <p><img src="/public/images/media/franchiseImg.jpg" style={{ width: '100%' }} alt="" /></p>
        <p>It all starts with why?<br />
          Business with Low investment and High result is hard to hit upon. We bridge the gap. ‘Grow big with us’ is our message board signature.<br />
          Promising expectations with low investment and high result, rocketing with leaps and bounds, we are rapidly getting bigger and looking for people who can help build the intensifying dream and take it to new horizons.<br />
          Within a span of 5years our brand has been greeted and much awaited in major locations within the city. The roots are in Chennai but we are truly a nationalised company having outlets in 15+ locations in Chennai, Madurai and Ambur. And we don’t stop here, we are also looking forward to set our footprints in major cities like Banglore, Mumbai, Hyderabad and Delhi shortly.<br />
          We are delighted to welcome the investors who would want to Make and Grow Business with us and enjoy this journey
        </p>
      </div>
      <div className="document_3">
        <h4> FAQ: </h4>
        <p>
          <div>1.	Why Le Wrap Factorie?</div>
          Le Wrap Factorie gives you the great opportunity to own your own business, but not just any business, a proven business with a low investment, simple operations, flexible floor plans, national and local support, national and regional advertising, Complete training for our owners and their staffs, store development assistance, design support; lease negotiations, construction guidance and much, much more.
          With various franchise opportunities available, we can ensure we will help you make the right decisions so you can hit the ground running and grow your business, quickly and easily. And your options are limitless. As we continue to grow the brand, we remain competitive by offering franchising opportunities through multi-unit acquisitions and new restaurant development.
          We have the recipe for success and are determined to empower you with first-class knowledge resources and support needed to be a member of the Le Wrap Factorie family. We stand ready to support your franchising & development plans. We have an incredibly strong brand, combined with a unique product range. Anyone wanting to open their own Le Wrap Factorie Franchisee will have to be an extremely capable individual completely dedicated to following our proven system and building a very successful business.Are you ready to take action?
          <ul>
            <li>
              Customized and well defined unique products provided with highly trained professionals.
            </li>
            <li>
              Innovative, fast casual brand at the forefront of the "Best Mexican Wraps and Burgers" category
            </li>
            <li>
              Systemized hassles free Inventory and tracking methods.
            </li>
            <li>
              Moderate capital cost
            </li>
            <li>
              Low switching cost
            </li>
            <li>
              {'<1%'} Wastage
            </li>
            <li>
              End to end systemized and transparent business.
            </li>
            <li>
              Complete Operational support to monitor and drive business.
            </li>
            <li>
              Complete centralized buying and sourcing of raw materials.
            </li>
          </ul>
        </p>
        <p>
          <div>2. How much is the investment and franchisee fee?</div>
          The investment can range from INR 800,000 to INR 15,00,000. This includes the initial franchise fee of INR 200,000.
        </p>
        <p>
          <div>3. How much are the royalty and advertising fees?</div>
          Franchisees pay 5% every month (gross sales minus the sales tax); 3.5% goes toward the franchise royalties and 1.5% goes towards advertising.
        </p>
        <p>
          <div>4. How to find best location?</div>
          Our system is committed to developing restaurants profitably in the best locations across the country. We have a strong team empowered with growth-driving initiatives to help identify the right location for you. Whether you are interested in developing our signature prototype in your local neighbourhood, or are thinking outside the box, we have opportunities for growth in malls, airports, colleges and universities, and other retail locations.
        </p>
      </div>
      <div className="document_3">
        <h4>WANT TO KNOW MORE…?</h4>
        <p>
          <div>If you’re interested to hear more about our Franchisee opportunities,</div>
          <div>Reach us at – 9176348700 ; 9884829239 ; 9884370900 ; lewrapfactorie@gmail.com</div>
          <div>Share us your details <Link to="/contactus">here</Link>, Our reprentative will reach you at the earliest.</div>
        </p>
      </div>
    </div>
  </div>
);

export default Franc;
