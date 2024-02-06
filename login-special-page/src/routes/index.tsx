import { Route, Routes } from "react-router-dom";
import LoginPage from "../components/login-page/LoginPage";
import Home from "../components/home/Home";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default RoutesMain;
