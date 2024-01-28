import PropTypes from "prop-types";
import { useState } from "react";
import ButtonPage from "../Buttons/ButtonPage";
import ButtonSorting from "../Buttons/ButtonSorting";
import Img from "./Img";

import "./sectionPhotos.scss";

const photoElements = (photos, photoIndex, setPhotoIndex) => {
  return (
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
  );
};

export default function SectionPhotos(props) {
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <section>
      <div className="background_btns">
        <div className="btns">
          <div className="btns_child">
            {props.category.map((el, index) => (
              <ButtonSorting
                key={index}
                id={+el.id}
                setId={props.setCategoryId}
              >
                {el.name}
              </ButtonSorting>
            ))}
          </div>
        </div>
      </div>

      <div className="photos">
        {props.photosIsLoad ? (
          <p>Идет загрузка </p>
        ) : (
          photoElements(
            props.photos,
            photoIndex,
            setPhotoIndex,
            props.photosIsLoad
          )
        )}
      </div>

      <div className="background_page">
        <div className="btns-page_child">
          <ButtonPage
            photosArr={props.photos}
            photoIndex={photoIndex}
            setPhotoIndex={setPhotoIndex}
          />
        </div>
      </div>
    </section>
  );
}

SectionPhotos.propTypes = {
  photos: PropTypes.array,
  category: PropTypes.array,
  setCategoryId: PropTypes.func,
  photosIsLoad: PropTypes.bool,
};
