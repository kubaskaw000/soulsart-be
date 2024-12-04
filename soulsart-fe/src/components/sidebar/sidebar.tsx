import { clsx } from "clsx";
import "./sidebar.scss";
import HomeIcon from "../../assets/HomeIcon.svg?react";
import { useSelector } from "react-redux";

type sideBarItemType = {
  content?: string;
};

const sideBarItems: sideBarItemType[] = [
  { content: "1" },
  { content: "2" },
  { content: "3" },
];

export const Sidebar = () => {
  const isSideBarOpen = useSelector((state) => state.app.isSidebarOpen);

  return (
    <div className={clsx("sidebar", isSideBarOpen && "sidebar--wide")}>
      <div className="sidebard__items">
        {sideBarItems.map((sideBarItem) => (
          <div key={sideBarItem.content} className="sidebar__item">
            <HomeIcon className="sidebar__icon" />
            {isSideBarOpen && <span>{sideBarItem.content}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};
