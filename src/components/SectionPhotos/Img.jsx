import PropTypes from "prop-types";
import { useEffect } from "react";

Img.propTypes = {
  opacity: PropTypes.bool,
  photosArr: PropTypes.array,
  index: PropTypes.number,
  setPhotoIndex: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default function Img({
  opacity,
  photosArr,
  index,
  setPhotoIndex,
  isLoading,
}) {
  useEffect(() => {
    if (setPhotoIndex !== undefined) {
      if (index === photosArr.length) setPhotoIndex(0);
      else if (index === -1) setPhotoIndex(photosArr.length - 1);
    }
  }, [setPhotoIndex, index, photosArr.length]);

  return isLoading ? (
    <p>Идет загрузка...</p>
  ) : (
    photosArr[index] !== undefined && (
      <img
        src={photosArr[index].link}
        alt="photo"
        className={`${opacity ? "opacity" : ""}`}
      />
    )
  );
}
