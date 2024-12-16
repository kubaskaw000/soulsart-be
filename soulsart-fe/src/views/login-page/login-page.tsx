import "./login-page.scss";
import { Button } from "../../components/button/button.tsx";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";
import { loginUser } from "../../store/user/user-actions.ts";
import { useAppDispatch, useAppSelector } from "../../store/store.ts";
// import { isSidebarOpen } from "../../store/app-slice.ts";

export const LoginPage = () => {
  const navigate = useNavigate();
  //const isSideBarOpen = useAppSelector(isSidebarOpen);
  const dispatch = useAppDispatch();
  const selector = useAppSelector((state) => state.userReducer);

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    console.log(loginData);
    dispatch(loginUser(loginData));
  };

  const check = () => {
    console.log(selector);
  };

  return (
    <div className="login-page">
      <Button onClick={() => navigate("/")} className="login-page__box__return">
        Powrót
      </Button>
      <div className="login-page__desktop-greeting">
        <img
          className="login-page__logo"
          src={"/src/assets/svgs/dark-souls-logo-without-background.svg"}
          alt="login logo"
        />
        <h1>Welcome to SoulsArt</h1>
      </div>
      <div className="login-page__box">
        <div className="login-page__box-left">
          <h1>Join Art</h1>
          <p>
            Join the world's largest art community and get personalized art
            recommendations.
          </p>
        </div>
        <div className="login-page__box-right">
          <form onSubmit={handleSubmit} className="login-page__form">
            <input
              name="email"
              onChange={handleChange}
              type="text"
              placeholder="Username"
            />
            <input
              name="password"
              onChange={handleChange}
              type="password"
              placeholder="Password"
            />
            <Button type="submit">Login</Button>

            <Button type="button" onClick={check} variant="clear">
              Forgot password?
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
