import React from 'react';
import classNames from 'classnames/bind';
import styles from './ParallaxHero.scss';

const s = classNames.bind(styles);
const ParallaxHero = ({ imageUrl, title }) => {
  return (
    <section className={s('container')}>
      <picture
        className={`${s('imageContainer')} lazyload`}
        style={{
          backgroundImage: `url(${imageUrl}?w=1600)`
        }}
      >
        <h1 className={s({ title: true })}>{title}</h1>
      </picture>
    </section>
  );
};

export default ParallaxHero;
