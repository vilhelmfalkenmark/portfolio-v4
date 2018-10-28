export const truncateText = ({ maxLength, text }) => {
  if (typeof text !== 'string') {
    return null;
  }
  if (text.length > maxLength) {
    return `${text.substring(0, maxLength)}...`;
  }

  return text;
};

export default truncateText;
