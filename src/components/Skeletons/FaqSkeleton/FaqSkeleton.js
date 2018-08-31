import React from "react";
import WithStyles from "layout/WithStyles";
import s from "./FaqSkeleton.css";

const FaqItemSkeleton = () => {
  return (
    <li className={`${s.item} ${s.skeleton}`}>
      <span className={`${s.r1c1} ${s.skeletonBlock}`} />
      <span className={`${s.r2c1} ${s.skeletonBlock}`} />
      <span className={`${s.r3c1} ${s.skeletonBlock}`} />
      <span className={`${s.r4c1} ${s.skeletonBlock}`} />
      <span className={`${s.r5c1} ${s.skeletonBlock}`} />
    </li>
  );
};

const FaqSkeleton = () => {
  return (
    <ul className={s.list}>
      <FaqItemSkeleton />
      <FaqItemSkeleton />
      <FaqItemSkeleton />
      <FaqItemSkeleton />
    </ul>
  );
};

export default WithStyles(FaqSkeleton, s);
