import { Route, Routes } from "react-router-dom";
import LoginPage from "../components/login-page/LoginPage";
import Home from "../components/home/Home";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default RoutesMain;
