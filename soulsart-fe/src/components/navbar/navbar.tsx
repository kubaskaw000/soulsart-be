import { isSidebarOpen, setSidebarOpen } from "../../store/app-slice.ts";
import Hamburger from "../../assets/Hamburger.svg?react";
import "./navbar.scss";
import { Button } from "../button/button.tsx";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/store.ts";
import { useDispatch } from "react-redux";

export const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSideBarOpen = useAppSelector(isSidebarOpen);

  return (
    <nav className="navbar">
      <Hamburger
        className="sidebar__switch"
        onClick={() => dispatch(setSidebarOpen(!isSideBarOpen))}
      />
      <div className="navbar__right">
        <Button onClick={() => navigate("/login")}>Login</Button>
        <Button
          onClick={() => console.log(isSideBarOpen)}
          className="navbar__right__button"
        >
          Join
        </Button>
      </div>
    </nav>
  );
};
