import "./buttons.scss";
import PropTypes from "prop-types";

ButtonSorting.propTypes = {
  children: PropTypes.string,
  id: PropTypes.number,
  setId: PropTypes.func,
};

export default function ButtonSorting({ children, id, setId }) {
  return (
    <button className="btn_sorting" onClick={() => setId(id)}>
      {children}
    </button>
  );
}
