import React from "react";
import Loadable from "react-loadable";
// import { serverSideFetchExperiences } from "store/experiences/actions";
// import {
//   serverSideFetchProjects,
//   serverSideFetchProjectDetails
// } from "store/projects/actions";
// import { serverSideFetchLandingPage } from "store/landingPage/actions";

function Loading() {
  return (
    <div>
      <h1>LADDAR</h1>
      <h1>LADDAR</h1>
      <h1>LADDAR</h1>
      <h1>LADDAR</h1>
      <h1>LADDAR</h1>
    </div>
  );
}

const LandingPageEntrypoint = Loadable({
  loader: () =>
    import(/* webpackChunkName: "LandingPageEntrypoint" */ "../entrypoints/LandingPage"),
  loading: Loading,
  modules: ["LandingPageEntrypoint"]
});

const ProjectsEntrypoint = Loadable({
  loader: () =>
    import(/* webpackChunkName: "ProjectsEntrypoint" */ "../entrypoints/Projects"),
  loading: Loading,
  modules: ["ProjectsEntrypoint"]
});

const ProjectDetailsEntrypoint = Loadable({
  loader: () =>
    import(/* webpackChunkName: "ProjectDetailsEntrypoint" */ "../entrypoints/ProjectDetails"),
  loading: Loading,
  modules: ["ProjectDetailsEntrypoint"]
});

const ExperiencesEntrypoint = Loadable({
  loader: () =>
    import(/* webpackChunkName: "ExperiencesEntrypoint" */ "../entrypoints/Experiences"),
  loading: Loading,
  modules: ["ExperiencesEntrypoint"]
});

const NotFoundEntrypoint = Loadable({
  loader: () =>
    import(/* webpackChunkName: "NotFoundEntrypoint" */ "../entrypoints/NotFound"),
  loading: Loading,
  modules: ["NotFoundEntrypoint"]
});

//////////////////////////////////////////////////
/**
 * Routes base
 */
//////////////////////////////////////////////////
export const LANDING_ROUTE = {
  exact: true,
  navTitle: "Hem",
  path: "/",
  apiPath: "/landing-page/",
  component: LandingPageEntrypoint,
  key: 218
};

export const PROJECTS_ROUTE = {
  exact: false,
  navTitle: "Projekt",
  path: "/projekt/",
  apiPath: "/projects",
  component: ProjectsEntrypoint,
  key: 219
};

export const PROJECT_DETAILS_ROUTE = {
  exact: true,
  navTitle: null,
  path: "/projekt/:slug",
  apiPath: "/projects", // TODO add comment about why it is written like this
  component: ProjectDetailsEntrypoint,
  key: 219
};

export const EXPERIENCES_ROUTE = {
  exact: true,
  navTitle: "Erfarenheter",
  path: "/erfarenheter/",
  apiPath: "/experiences/",
  component: ExperiencesEntrypoint,
  key: 220
};

export const NOT_FOUND_ROUTE = {
  exact: false,
  path: "/sidan-kunde-hittas/",
  component: NotFoundEntrypoint,
  key: 220
};

export default [
  LANDING_ROUTE,
  PROJECT_DETAILS_ROUTE,
  PROJECTS_ROUTE,
  EXPERIENCES_ROUTE
];
