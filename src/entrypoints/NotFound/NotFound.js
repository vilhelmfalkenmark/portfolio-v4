import React from "react";
import DocumentTitle from "react-document-title";
import copy from "utils/copy";
import Hero from "components/Hero";

import WithStyles from "layout/WithStyles";

import s from "./NotFound.css";

const NotFound = () => {
  return (
    <DocumentTitle title={"Sidan kunde inte hittas"}>
      <main className={s({ container: true })}>
        <Hero
          title={`Sidan kunde hittas men vi gifter oss som sagt ${
            copy.weddingDate
          }`}
          notFound
          infoFulfilled={false}
        />
      </main>
    </DocumentTitle>
  );
};

export default WithStyles(NotFound, s);
