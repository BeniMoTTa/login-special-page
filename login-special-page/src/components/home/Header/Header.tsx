import { images } from "../../../hooks";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <h1 className="app__header-h1">The flavors that you love the most</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        We have 20 years of tradition, building a customer base that always
        praises us for our services.
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
