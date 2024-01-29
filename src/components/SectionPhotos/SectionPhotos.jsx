import PropTypes from "prop-types";
import { useState } from "react";
import ButtonPage from "../Buttons/ButtonPage";
import ButtonSorting from "../Buttons/ButtonSorting";
import Img from "./Img";

import "./sectionPhotos.scss";

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
          <div className="photos_elts">
            <Img
              opacity={false}
              photosArr={props.photos}
              index={photoIndex}
              setPhotoIndex={setPhotoIndex}
            />
          </div>
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
};
