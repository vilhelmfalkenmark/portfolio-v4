import React, { Component } from "react";
import WithStyles from "layout/WithStyles";

import s from "./LoadingPlaceholder.css";

function LoadingPlaceholder({
  SkeletonPlaceholderComponent,
  withRibbonHeading
}) {
  class LP extends Component {
    render() {
      return (
        <div
          className={s({
            container: true,
            withRibbonContainer: withRibbonHeading,
            withoutRibbonContainer: !withRibbonHeading
          })}
        >
          {withRibbonHeading && <h3>HÄmtar!</h3>}
          <SkeletonPlaceholderComponent />
        </div>
      );
    }
  }
  return WithStyles(LP, s);
}

export default LoadingPlaceholder;
