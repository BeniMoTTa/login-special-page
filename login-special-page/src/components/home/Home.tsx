import Navbar from "./menuHeader/Navbar";
import Header from "./Header/Header";
import AboutUs from "./AboutUs/AboutUs";
import "./home.css";
import SpecialMenu from "./Menu/SpecialMenu";

import Intro from "./Intro/Intro";
import Laurels from "./Laurels/Laurels";
import Gallery from "./Gallery/Gallery";
import FindUs from "./Findus/FindUs";
import Clients from "./Chef/Clients";
import Footer from "./Footer/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Gallery />
      <Clients />
      <Intro />
      <Laurels />
      <FindUs />
      <Footer />
    </div>
  );
};

export default Home;
