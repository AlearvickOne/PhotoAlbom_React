import PropTypes from "prop-types";

Img.propTypes = {
  opacity: PropTypes.bool,
  photosArr: PropTypes.array,
  index: PropTypes.number,
  setPhotoIndex: PropTypes.func,
};

export default function Img({ opacity, photosArr, index, setPhotoIndex }) {
  if (setPhotoIndex !== undefined) {
    if (index === photosArr.length) setPhotoIndex(0);
    else if (index === -1) setPhotoIndex(photosArr.length - 1);
  }

  return (
    photosArr[index] !== undefined && (
      <img
        src={photosArr[index].link}
        alt="photo"
        className={`${opacity ? "opacity" : ""}`}
      />
    )
  );
}
