import React from 'react';
import { NavLink } from 'react-router-dom';
import { pluckImageUrl } from 'utils/selectors/projects';
import { truncateText } from 'utils/helpers/strings';
import macbook from 'assets/images/macbook.png';

import classNames from 'classnames/bind';
import styles from './Project.scss';

const s = classNames.bind(styles);

const Project = ({ project }) => {
  const imageUrl = pluckImageUrl(project.image);

  return (
    <li className={s({ container: true })}>
      <div className={s('column')}>
        <h4> {project.title}</h4>
        <p>
          {truncateText({ maxLength: 300, text: project.content })}
          <NavLink
            to={`${project.slug}/`}
            className={s('inlineLink')}
          >{`Läs mer`}</NavLink>
        </p>
        {project.link && (
          <a target="_BLANK" href={project.link} rel="noreferrer">
            {project.link}
          </a>
        )}
      </div>
      <div className={s('column')}>
        <picture className={s('picture')}>
          <img src={macbook} alt="macbook" className={s('macbook')} />
          {imageUrl && (
            <img
              src={`${imageUrl}?w=500`}
              alt={project.imageAlt}
              className={`${s('portfolioImage')} lazyload`}
            />
          )}
          <NavLink
            to={`${project.slug}/`}
            className={s('link')}
          >{`Läs mer`}</NavLink>
        </picture>
      </div>
    </li>
  );
};

export default Project;
