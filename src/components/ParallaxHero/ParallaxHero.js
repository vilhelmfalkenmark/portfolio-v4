import React from 'react';
import classNames from 'classnames/bind';
import styles from './ParallaxHero.css';

const s = classNames.bind(styles);
const ParallaxHero = ({ imageUrl, title }) => {
  return (
    <section className={s('container')}>
      <picture
        className={s('imageContainer')}
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      >
        <h1 className={s({ title: true })}>{title}</h1>
      </picture>
    </section>
  );
};

export default ParallaxHero;
