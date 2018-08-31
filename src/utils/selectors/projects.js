import { view, lensPath } from "ramda";

export const pluckImageUrl = imageObject =>
  view(lensPath(["fields", "file", "url"]), imageObject);

export default pluckImageUrl;
