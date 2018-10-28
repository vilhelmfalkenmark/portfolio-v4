import React from 'react';
import classNames from 'classnames/bind';

import SVG from 'components/SVG';
import ville from 'assets/svg/ville.svg';
import styles from './Logo.css';

const s = classNames.bind(styles);

const Logo = ({ copy, className }) => (
  <figure className={s({ container: true, [className]: className })}>
    <SVG className={s('logo')} svg={ville} />
  </figure>
);

export default Logo;
