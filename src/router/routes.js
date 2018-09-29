import React from "react";
import Loadable from "react-loadable";

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

//////////////////////////////////////////////////
/**
 * Routes base
 */
//////////////////////////////////////////////////
export const LANDING_ROUTE = {
  exact: true,
  navTitle: "Hem",
  path: "/",
  component: LandingPageEntrypoint,
  key: 218
};

export const PROJECTS_ROUTE = {
  exact: false,
  navTitle: "Projekt",
  path: "/projekt/",
  component: ProjectsEntrypoint,
  key: 219
};

export default [LANDING_ROUTE, PROJECTS_ROUTE];
