import { Sidebar } from "../../components/sidebar/sidebar.tsx";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./single-art-page.scss";
import { Button } from "../../components/button/button.tsx";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

export const SingleArtPage = () => {
  const navigate = useNavigate();
  const isSideBarOpen = useSelector((state) => state.app.isSidebarOpen);
  //TODO fetch art data

  return (
    <div className="single-art-page">
      <div className="parent">
        <Button onClick={() => navigate(-1)}>Home</Button>
        {isSideBarOpen && <Sidebar />}
        <div className="div1 single-art-page__art-image-container">
          <PhotoProvider>
            <PhotoView src={"https://picsum.photos/1280/720"}>
              <img
                className="single-art-page__art-image"
                src={"https://picsum.photos/1280/720"}
                alt={"aa"}
              />
            </PhotoView>
          </PhotoProvider>
          <div className="art-details">
            <div>add to favorites</div>
            <div className="art-details__header-info">
              <img
                width={50}
                height={50}
                src={"https://picsum.photos/200/240"}
                alt={"user avatar"}
              />
              <div className="art-details__art-basic-info">
                <div>art title</div>
                <div>by: autor</div>
                <div>published: data </div>
              </div>
            </div>
            <div className="art-details__art-statistics">
              <div>10 favorites</div>
              <div>10 comments</div>
              <div>10 views</div>
            </div>

            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
            <div> comments section </div>
          </div>
        </div>
        <div className="div2">
          <div>sugg1</div>
          <div>sugg1</div>
          <div>sugg1</div>
          <div>sugg1</div>
          <div>sugg1</div>
        </div>
      </div>
    </div>
  );
};
