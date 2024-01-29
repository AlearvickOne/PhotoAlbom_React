import PropTypes from "prop-types";
import { useEffect } from "react";

Img.propTypes = {
  opacity: PropTypes.bool,
  photosArr: PropTypes.array,
  index: PropTypes.number,
  setPhotoIndex: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default function Img({ photosArr, index, setPhotoIndex }) {
  useEffect(() => {
    if (setPhotoIndex !== undefined) {
      if (index === photosArr.length) setPhotoIndex(0);
      else if (index === -1) setPhotoIndex(photosArr.length - 1);
    }
  }, [setPhotoIndex, index, photosArr.length]);

  return (
    photosArr[index] !== undefined && (
      <>
        <img
          src={photosArr[index - 1 === -1 ? photosArr.length - 1 : index - 1].link}
          alt="photo"
        />
        <img src={photosArr[index].link} alt="photo" />
        <img
          src={photosArr[index + 1 === photosArr.length ? 0 : index + 1].link}
          alt="photo"
        />
      </>
    )
  );
}
