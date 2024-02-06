import { SiGmail } from "react-icons/si";
import { RegisterData, registerSchema } from "../../validations/register";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaFacebook } from "react-icons/fa";
import { useAuth } from "../../hooks/useAuth";

const RegisterForm = () => {
  const { userRegister } = useAuth();

  const { register, handleSubmit } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
  });
  const onSubmit = (data: RegisterData) => {
    userRegister(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="title-basic">New Account</h1>
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
      <span>or registrate with your datas</span>
      <div className="input-container">
        <input
          id="name"
          type="text"
          placeholder="type your name..."
          {...register("name")}
        />
      </div>
      <div className="input-container">
        <input
          id="email"
          type="email"
          placeholder="type your email..."
          {...register("email")}
        />
      </div>
      <div className="input-container">
        <input
          id="password"
          type="password"
          placeholder="type your password..."
          {...register("password")}
        />
      </div>
      <div className="input-container">
        <input
          id="phone"
          type="tel"
          placeholder="type your phone..."
          {...register("phone")}
        />
      </div>
      <div className="input-container">
        <input
          id="photo"
          type="text"
          placeholder="link to your photo..."
          {...register("photo")}
        />
      </div>

      <button>Sign Up</button>
    </form>
  );
};

export default RegisterForm;
