import { setSidebarOpen } from "../../store/app-slice.ts";
import { useDispatch } from "react-redux";
import "./default-layout.scss";
import { Header } from "../../components/header/header.tsx";
import { Sidebar } from "../../components/sidebar/sidebar.tsx";
import { ArtGalleryPage } from "../art-gallery-page/art-gallery-page.tsx";

export const DefaultLayout = () => {
  const dispatch = useDispatch();

  return (
    <div className="default-layout">
      <Sidebar />
      <div
        onClick={() => dispatch(setSidebarOpen(false))}
        className="default-layout__content"
      >
        <Header />
        <ArtGalleryPage />
      </div>
    </div>
  );
};
