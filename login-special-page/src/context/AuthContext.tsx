import { ReactNode, createContext, useState } from "react";
import { LoginData } from "../validations/login";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { UserData } from "../validations/user";
import { RegisterData } from "../validations/register";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextValues>(
  {} as AuthContextValues
);

interface AuthContextValues {
  userLogin: (data: LoginData) => void;
  userData: UserData;
  logout: () => void;
  isUserLoggedIn: boolean;
  userRegister: (data: RegisterData) => void;
  loading: boolean;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [userData, setUserData] = useState({} as UserData);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const resetUser = {
    name: "",
    id: 0,
    user_color: "",
    email: "",
    password: "",
    phone: "",
  };

  const userLogin = async (dataUser: LoginData) => {
    try {
      const response = await api.post("/login", dataUser);
      const { token, user_id } = response.data;
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      localStorage.setItem("user-token", token);
      localStorage.setItem("user-id", user_id);
      const { data } = await api.get(`/users/${user_id}`);
      if (data) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const userRegister = async (data: RegisterData) => {
    try {
      setLoading(true);
      await api.post("/users", data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUserData(resetUser);
    localStorage.clear();
    setIsUserLoggedIn(false);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        userLogin,
        userData,
        logout,
        isUserLoggedIn,
        userRegister,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
