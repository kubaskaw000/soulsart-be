import { useNavigate } from "react-router-dom";
import "./art-gallery-page.scss";

const exampleImages = [
  "https://picsum.photos/200/200",
  "https://picsum.photos/200/210",
  "https://picsum.photos/200/220",
  "https://picsum.photos/200/221",
  "https://picsum.photos/200/222",
  "https://picsum.photos/200/223",
  "https://picsum.photos/200/224",
  "https://picsum.photos/200/225",
  "https://picsum.photos/200/226",
  "https://picsum.photos/200/227",
  "https://picsum.photos/200/228",
  "https://picsum.photos/200/229",
  "https://picsum.photos/200/230",
  "https://picsum.photos/200/231",
  "https://picsum.photos/200/232",
  "https://picsum.photos/200/233",
  "https://picsum.photos/200/234",
  "https://picsum.photos/200/235",
  "https://picsum.photos/200/236",
  "https://picsum.photos/200/237",
  "https://picsum.photos/200/238",
  "https://picsum.photos/200/239",
  "https://picsum.photos/200/240",
];

export const ArtGalleryPage = () => {
  const navigate = useNavigate();

  return (
    <div className="art-gallery-page__images">
      {exampleImages.map((image, index) => (
        <img
          className="art-gallery-page__image"
          onClick={() => {
            navigate(`/art/${index}`);
          }}
          key={index}
          src={image}
          alt="example"
        />
      ))}
    </div>
  );
};
