import React from 'react';
// import ScrollDown from 'components/ScrollDown';
import Logo from 'components/Logo';
// import Particles from 'react-particles-js';
import classNames from 'classnames/bind';

import styles from './Hero.scss';

const s = classNames.bind(styles);

const Hero = ({ children, className }) => {
  return (
    <section className={s({ container: true, [className]: className })}>
      {/* <Particles
        params={{
          particles: {
            line_linked: {
              shadow: {
                enable: true,
                color: '#fff',
                blur: 5
              }
            }
          }
        }}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          zIndex: 4,
          top: 0,
          left: 0
        }}
      /> */}
      <Logo className={s('logo')} />
    </section>
  );
};

export default Hero;
