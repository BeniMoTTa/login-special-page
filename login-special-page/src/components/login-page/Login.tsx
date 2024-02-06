import { useState } from "react";
import { SiGmail } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import "./login.css";
import { useAuth } from "../../hooks/useAuth";
import { LoginData, loginSchema } from "../../validations/login";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import RegisterForm from "./register";

const Login = () => {
  const [email, setEmail] = useState("");
  const [isRegisterActive, setIsRegisterActive] = useState(false);
  const [isContainerActive, setIsContainerActive] = useState(false);

  const { userLogin } = useAuth();

  const { register, handleSubmit } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const handleToggleRegister = () => {
    setIsRegisterActive(!isRegisterActive);
    setIsContainerActive(true);
  };
  const handleToggleSignIn = () => {
    setIsContainerActive(!isContainerActive);
  };

  return (
    <div className="general-container">
      <div
        className={`container ${isRegisterActive ? "active" : ""}`}
        id="container"
      >
        <div className="form-container sign-up">
          <RegisterForm />
        </div>
        <div className="form-container sign-in">
          <form onSubmit={handleSubmit(userLogin)}>
            <h1 className="title-basic">Sign In</h1>
            <div className="space-icon">
              <div className="gmail-icon">
                <span>
                  <SiGmail />
                </span>
                <p>Connect with gmail</p>
              </div>
              <div className="facebook-icon">
                <span>
                  <FaFacebook />
                </span>
                <p>Connect with facebook</p>
              </div>
            </div>
            <span>or use your email password</span>

            <div className="input-container">
              <input
                id="email"
                value={email}
                type="email"
                placeholder="enter with your email.."
                {...register("email")}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-container">
              <input
                id="password"
                type="password"
                placeholder="enter with your password..."
                {...register("password")}
              />
            </div>

            <a href="#" className="forget-btn">
              Forget Your Password?
            </a>
            <button id="login" onClick={handleToggleSignIn}>
              Sign In
            </button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>
                Do you already have an account with us? Log in to your account
                to access our site.
              </p>
              <button
                className={`hidden ${isRegisterActive ? "active" : ""}`}
                id="login"
                onClick={handleToggleRegister}
              >
                Sign In
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Stranger!</h1>
              <p>Register your data with us to gain access to our dishes</p>
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
    </div>
  );
};

export default Login;
