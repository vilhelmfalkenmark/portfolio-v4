import React from "react";
import WithStyles from "layout/WithStyles";

import s from "./InstagramSkeleton.css";

const InstagramImageSkeleton = () => {
  return <li className={`${s.item} ${s.skeleton}`} />;
};

const InstagramSkeleton = () => {
  return (
    <ul className={s.list}>
      <InstagramImageSkeleton />
      <InstagramImageSkeleton />
      <InstagramImageSkeleton />
      <InstagramImageSkeleton />
      <InstagramImageSkeleton />
      <InstagramImageSkeleton />
    </ul>
  );
};

export default WithStyles(InstagramSkeleton, s);
