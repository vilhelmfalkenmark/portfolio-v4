import { Component, Children } from "react";
import PropTypes from "prop-types";

/**
 * WithStylesContext component
 * @returns {jsx} React markup
 */
class WithStylesContext extends Component {
  /**
   * Inserts the onInsertCSS into child elements
   * @returns {Object} Child context, with insertCSS bound
   */
  getChildContext() {
    return { insertCss: this.props.onInsertCss };
  }

  /**
   * @returns {jsx} render
   */
  render() {
    return Children.only(this.props.children);
  }
}

WithStylesContext.propTypes = {
  children: PropTypes.element.isRequired,
  onInsertCss: PropTypes.func.isRequired
};

WithStylesContext.childContextTypes = {
  insertCss: PropTypes.func.isRequired
};

export default WithStylesContext;
