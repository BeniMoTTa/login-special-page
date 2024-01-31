import Navbar from "./menuHeader/Navbar";
import Header from "./Header/Header";
import AboutUs from "./AboutUs/AboutUs";
import "./home.css";
import SpecialMenu from "./Menu/SpecialMenu";
import Chef from "./Chef/Chef";
import Intro from "./Intro/Intro";
import Laurels from "./Laurels/Laurels";
import Gallery from "./Gallery/Gallery";
import FindUs from "./Findus/FindUs";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
    </div>
  );
};

export default Home;
