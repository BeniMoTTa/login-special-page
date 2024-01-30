import { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [isRegisterActive, setIsRegisterActive] = useState(false);
  const [isContainerActive, setIsContainerActive] = useState(false);

  const handleToggleRegister = () => {
    setIsRegisterActive(!isRegisterActive);
    setIsContainerActive(true);
  };
  const handleToggleSignIn = () => {
    setIsContainerActive(!isContainerActive);
  };
  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Adicione a lógica de autenticação aqui
    console.log("Login:", email);
  };

  const handleRegister = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Adicione a lógica de registro aqui
    console.log("Register:", email);
  };
  return (
    <div
      className={`container ${isRegisterActive ? "active" : ""}`}
      id="container"
    >
      <div className="form-container sign-up">
        <form onSubmit={handleRegister}>
          <h1>Create Account</h1>
          <div className="social-icons">
            <a href="#" className="icon">
              <i className="fa-brands fa-google-plus-g"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
          <span>or use your email for registeration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form onSubmit={handleLogin}>
          <h1>Sign In</h1>
          <div className="social-icons">
            <a href="#" className="icon">
              <i className="fa-brands fa-google-plus-g"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
          <span>or use your email password</span>
          <input
            type="email"
            placeholder="Email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input type="password" placeholder="Password" />
          <a href="#">Forget Your Password?</a>
          <button className="hidden" id="login" onClick={handleToggleSignIn}>
            Sign In
          </button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
            <button
              className={`hidden ${isRegisterActive ? "active" : ""}`}
              id="login"
              onClick={handleToggleRegister}
            >
              Sign In
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>
              Register with your personal details to use all of site features
            </p>
            <button
              className={`hidden ${isRegisterActive ? "active" : ""}`}
              id="register"
              onClick={handleToggleRegister}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
