import PropTypes from "prop-types";

ButtonPage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function ButtonPage({ children }) {
  return <button className="btn_page">{children}</button>;
}
