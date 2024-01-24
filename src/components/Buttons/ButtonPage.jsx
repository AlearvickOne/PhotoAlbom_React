import PropTypes from "prop-types";

ButtonPage.propTypes = {
  photoIndex: PropTypes.number,
  setPhotoIndex: PropTypes.func,
};

export default function ButtonPage({ photoIndex, setPhotoIndex }) {
  return (
    <>
      <button
        className="btn_page "
        onClick={() => {
          setPhotoIndex(photoIndex - 1);
        }}
      >
        {"<"}
      </button>
      <button
        className="btn_page "
        onClick={() => {
          setPhotoIndex(photoIndex + 1);
        }}
      >
        {">"}
      </button>
    </>
  );
}
