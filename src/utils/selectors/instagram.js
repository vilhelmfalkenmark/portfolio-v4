import { view, lensPath } from "ramda";

export const lowResolutionUrlView = image =>
  view(lensPath(["images", "low_resolution", "url"]), image);

export const captionView = image => view(lensPath(["caption", "text"]), image);

export const likesView = image => view(lensPath(["likes", "count"]), image);

export const userView = image => view(lensPath(["user", "username"]), image);
