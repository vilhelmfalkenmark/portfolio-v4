import React from "react";
import WithStyles from "layout/WithStyles";

import s from "./GuestsSkeleton.css";

const GuestSkeleton = () => {
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

const GuestsSkeleton = ({ heading }) => {
  return (
    <div>
      <h3 className={s({ heading: true })}>{heading}</h3>
      <ul className={s({ list: true })}>
        <GuestSkeleton />
        <GuestSkeleton />
        <GuestSkeleton />
        <GuestSkeleton />
        <GuestSkeleton />
        <GuestSkeleton />
      </ul>
    </div>
  );
};

export default WithStyles(GuestsSkeleton, s);
