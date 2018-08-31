import React from "react";
import WithStyles from "layout/WithStyles";

import s from "./RsvpSkeleton.css";

const RsvpSkeleton = () => {
  return (
    <div className={s({ container: true })}>
      <ul className={s.list}>
        <li className={`${s.block} ${s.r1c1}`} />
        <li className={`${s.block} ${s.r2c1}`} />
        <li className={`${s.block} ${s.r3c1}`} />
        <li className={`${s.block} ${s.r4c1}`} />
        <li className={`${s.block} ${s.r5c1}`} />
      </ul>
    </div>
  );
};

export default WithStyles(RsvpSkeleton, s);
