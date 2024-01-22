import "./buttons.scss";
import PropTypes from "prop-types";

ButtonSorting.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function ButtonSorting({ children }) {
  return <button className="btn_sorting">{children}</button>;
}
