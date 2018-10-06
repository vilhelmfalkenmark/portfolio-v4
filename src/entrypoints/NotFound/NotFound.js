import React from "react";
import DocumentTitle from "react-document-title";
import classNames from "classnames/bind";

import styles from "./NotFound.css";

const s = classNames.bind(styles);

const NotFound = () => {
  return (
    <DocumentTitle title={"Sidan kunde inte hittas"}>
      <main className={s({ container: true })}>
        <h1>404!</h1>
        <h1>404!</h1>
        <h1>404!</h1>
        <h1>404!</h1>
        <h1>404!</h1>
        <h1>404!</h1>
        <h1>404!</h1>
      </main>
    </DocumentTitle>
  );
};

export default NotFound;
