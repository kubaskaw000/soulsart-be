import { clsx } from "clsx";
import "./sidebar.scss";
import HomeIcon from "../../assets/HomeIcon.svg?react";
import { useSelector } from "react-redux";
export const Sidebar = () => {
  const isSideBarOpen = useSelector((state) => state.app.isSidebarOpen);

  return (
    <div className={clsx("sidebar", isSideBarOpen && "sidebar--wide")}>
      <div className="sidebar__item">
        <HomeIcon className="sidebar__icon" />
        {isSideBarOpen && <span>SiemSiemaSiemaSiemaSiemaSiemaa</span>}
      </div>
      <div className="sidebar__item">
        <HomeIcon className="sidebar__icon" />
        {isSideBarOpen && <span>Siema</span>}
      </div>
      <div className="sidebar__item">
        <HomeIcon className="sidebar__icon" />
        {isSideBarOpen && <span>Siema</span>}
      </div>
    </div>
  );
};
