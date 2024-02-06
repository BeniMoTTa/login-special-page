import "./Footer.css";
import FooterOverlay from "../subFooter/FooterOverlay";
import logo from "../../../assets/CDJ logo.png";
import Newsletter from "../sectionNews/Newsletter";

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links"></div>
    <div className="app__footer-links_contact">
      <h1 className="app__footer-headtext">Contact Us</h1>
      <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
      <p className="p__opensans">+1 212-344-1230</p>
      <p className="p__opensans">+1 212-555-1230</p>
    </div>
    <div className="developed__by">
      <p className="p__opensans">Developed by:</p>
      <img src={logo} alt="" />
      <div className="developed__contacts">
        <h6>Contact developers:</h6>
        <a href="https://www.linkedin.com/in/jozhue-beni/" target="_blank">
          Jozhué Beni
        </a>
        <a href="https://www.linkedin.com/in/douglas-diniz-/" target="_blank">
          Douglas Diniz
        </a>
        <a href="https://www.linkedin.com/in/camilagdtavares/" target="_blank">
          Camila Tavares
        </a>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2024 JohnRestaurant. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
