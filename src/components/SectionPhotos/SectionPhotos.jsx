import { useState } from "react";
import ButtonPage from "../Buttons/ButtonPage";
import ButtonSorting from "../Buttons/ButtonSorting";
import Img from "./Img";

import "./sectionPhotos.scss";

const category = [
  { name: "Горы" },
  { name: "Природа" },
  { name: "Города" },
  { name: "Люди" },
  { name: "Животные" },
];

const photos = [
  { link: "/images_1.jpeg" },
  { link: "/images_2.jpeg" },
  { link: "/images_3.jpeg" },
  { link: "/images_4.jpg" },
  { link: "/images_5.jpg" },
  { link: "/Images_6.jpg" },
];

export default function SectionPhotos() {
  // eslint-disable-next-line no-unused-vars
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <section>
      <div className="background_btns">
        <div className="btns">
          <div className="btns_child">
            {category.map((el, index) => (
              <ButtonSorting key={index}>{el.name}</ButtonSorting>
            ))}
          </div>
        </div>
      </div>

      <div className="photos">
        <div className="photos_elts">
          <Img
            opacity={true}
            photosArr={photos}
            index={photoIndex - 1 === -1 ? photos.length - 1 : photoIndex - 1}
          />
          <Img
            opacity={false}
            photosArr={photos}
            index={photoIndex}
            setPhotoIndex={setPhotoIndex}
          />
          <Img
            opacity={true}
            photosArr={photos}
            index={photoIndex + 1 === photos.length ? 0 : photoIndex + 1}
          />
        </div>
      </div>

      <div className="background_page">
        <div className="btns-page_child">
          <ButtonPage
            photosArr={photos}
            photoIndex={photoIndex}
            setPhotoIndex={setPhotoIndex}
          />
        </div>
      </div>
    </section>
  );
}
