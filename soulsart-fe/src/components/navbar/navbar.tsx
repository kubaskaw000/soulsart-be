import { useDispatch, useSelector } from "react-redux";
import { setSidebarOpen } from "../../store/appSlice.ts";
import Hamburger from "../../assets/Hamburger.svg?react";
import "./navbar.scss";
import { Button } from "../button/button.tsx";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSideBarOpen = useSelector((state) => state.app.isSidebarOpen);

  return (
    <nav className="navbar">
      <Hamburger
        className="sidebar__switch"
        onClick={() => dispatch(setSidebarOpen(!isSideBarOpen))}
      />
      <div className="navbar__right">
        <Button onClick={() => navigate("/login")}>Login</Button>
        <Button className="navbar__right__button">Join</Button>
      </div>
    </nav>
  );
};
