import React from "react";
import ScrollDown from "components/ScrollDown";
import Particles from "react-particles-js";

// import image from "assets/images/hero.jpg";
import WithStyles from "layout/WithStyles";

import s from "./Hero.css";

const Hero = ({
  infoFulfilled,
  // imageUrl,
  scrollToContent = () => null
  // title = `Vi gifter oss ${copy.weddingDate}!`
}) => {
  return (
    <section
      className={s({ container: true })}
      // style={{ backgroundImage: `url(${image})` }}
    >
      {/* <h1 className={s({ title: true })}>{title}</h1> */}
      <Particles
        params={{
          particles: {
            line_linked: {
              shadow: {
                enable: true,
                color: "#fff",
                blur: 5
              }
            }
          }
        }}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: 4,
          top: 0,
          left: 0
        }}
      />
      <figure className={s({ scroller: true })}>
        {infoFulfilled && <ScrollDown onClickCallback={scrollToContent} />}
      </figure>
    </section>
  );
};

export default WithStyles(Hero, s);
