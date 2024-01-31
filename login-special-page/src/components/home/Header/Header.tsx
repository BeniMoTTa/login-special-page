import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <h1 className="app__header-h1">
        The <span>flavors</span> that you love the most
      </h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        We have 20 years of tradition, building a customer base that always
        praises us for our services.
      </p>
      <button type="button" className="custom__button">
        <a href="#menu">Daily menu</a>
      </button>
    </div>

    <div className="app__wrapper_img">
      <img
        src={
          "https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg?cs=srgb&dl=pexels-flo-dahm-541216.jpg&fm=jpg"
        }
        alt="header_img"
      />
    </div>
  </div>
);

export default Header;
