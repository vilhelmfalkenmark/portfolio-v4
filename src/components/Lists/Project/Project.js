import React from "react";

import { pluckImageUrl } from "utils/selectors/projects";

import classNames from "classnames/bind";
import styles from "./Project.css";

const s = classNames.bind(styles);

const Project = ({ project }) => {
  const imageUrl = pluckImageUrl(project.image);

  return (
    <li className={s({ container: true })}>
      <h4> {project.title}</h4>
      <p> {project.content}</p>
      {project.link && (
        <a target="_BLANK" href={project.link}>
          {project.link}
        </a>
      )}
      {imageUrl && <img src={imageUrl} alt={project.imageAlt} />}
    </li>
  );
};

export default Project;
