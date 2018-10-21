export const pluckSlug = path => {
  const pathToArray = path.split("/");
  let i = pathToArray.length - 1;
  while (i > -1) {
    if (pathToArray[i] !== "") {
      return pathToArray[i];
    }
    i--;
  }
  return null;
};

export default pluckSlug;
