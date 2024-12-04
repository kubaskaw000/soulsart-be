import "./login-page.scss";
import { Button } from "../../components/button/button.tsx";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="login-page">
      <Button onClick={() => navigate("/")} className="login-page__box__return">
        Powrót
      </Button>
      <div className="login-page__desktop-greeting">
        <img
          className="login-page__logo"
          src={"/src/assets/svgs/dark-souls-logo-without-background.svg"}
          alt="asd"
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
          <form className="login-page__form">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <Button>Login</Button>

            <Button variant="clear">Forgot password?</Button>
          </form>
        </div>
      </div>
    </div>
  );
};
