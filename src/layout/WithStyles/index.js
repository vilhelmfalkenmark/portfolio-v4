export { default } from "./WithStyles";

/**
 * Helper for injecting css in the DOM
 * @returns {bool} true
 */
export const onInsertStylesHandler = (...styles) => {
  styles.forEach(style => style._insertCss());
};
