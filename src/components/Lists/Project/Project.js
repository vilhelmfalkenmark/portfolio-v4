import React from "react";

import { pluckImageUrl } from "utils/selectors/projects";

import WithStyles from "layout/WithStyles";

import s from "./Project.css";

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

export default WithStyles(Project, s);
