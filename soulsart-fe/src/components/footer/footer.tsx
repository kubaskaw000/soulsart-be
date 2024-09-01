import "./footer.scss";
import { Button } from "../button/button.tsx";

export const Footer = () => {
  return (
    <footer className="footer">
      Join the world's largest art community and get personalized art
      recommendations.
      <Button>Join</Button>
      <Button>Login</Button>
    </footer>
  );
};
