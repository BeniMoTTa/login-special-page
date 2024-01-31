import "./AboutUs.css";

const AboutUs = () => (
  <div className="about-container" id="schedule">
    <div className="title-about">
      <h3>SCHEDULE</h3>
      <h5>our Restaurant</h5>
    </div>
    <div className="align-general">
      <img
        className="img-div-2"
        src="https://images.pexels.com/photos/2679501/pexels-photo-2679501.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
      />

      <div className="about-text">
        <div className="hours-area">
          <div>
            <span>Monday -</span>
            <span>12pm - 9pm</span>
          </div>
          <div>
            <span>Tuesday -</span>
            <span>12pm - 9pm</span>
          </div>
          <div>
            <span>Wednesday -</span>
            <span>12pm - 9pm</span>
          </div>
          <div>
            <span>Thursday -</span>
            <span>12pm - 9pm</span>
          </div>
          <div>
            <span>Friday -</span>
            <span>12pm - 11pm</span>
          </div>
          <div>
            <span>Saturday -</span>
            <span>12pm - 9pm</span>
          </div>
          <div>
            <span>Sunday-</span>
            <span>12pm - 9pm</span>
          </div>
        </div>

        <div className="phone-area">
          <h4>PHONE</h4>
          <p>219.542.1432</p>
          <p>219.777.1532</p>
        </div>
      </div>
      <div className="img-div-1">
        <img
          src="https://images.pexels.com/photos/5768972/pexels-photo-5768972.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
      </div>
    </div>
  </div>
);

export default AboutUs;
