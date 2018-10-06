import React from "react";
import Loadable from "react-loadable";
import { serverSideFetchExperiences } from "store/experiences/actions";
import { serverSideFetchProjects } from "store/projects/actions";
import { serverSideFetchLandingPage } from "store/landingPage/actions";

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

const ExperiencesEntrypoint = Loadable({
  loader: () =>
    import(/* webpackChunkName: "ExperiencesEntrypoint" */ "../entrypoints/Experiences"),
  loading: Loading,
  modules: ["ExperiencesEntrypoint"]
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
  ssrContentRequest: serverSideFetchLandingPage,
  key: 218
};

export const PROJECTS_ROUTE = {
  exact: true,
  navTitle: "Projekt",
  path: "/projekt/",
  apiPath: "/projects/",
  component: ProjectsEntrypoint,
  ssrContentRequest: serverSideFetchProjects,
  key: 219
};

export const EXPERIENCES_ROUTE = {
  exact: true,
  navTitle: "Erfarenheter",
  path: "/erfarenheter/",
  apiPath: "/experiences/",
  component: ExperiencesEntrypoint,
  ssrContentRequest: serverSideFetchExperiences,
  key: 220
};

export const NOT_FOUND_ROUTE = {
  exact: true,
  navTitle: "Erfarenheter",
  path: "/erfarenheter/",
  apiPath: "/experiences/",
  component: ExperiencesEntrypoint,
  ssrContentRequest: serverSideFetchExperiences,
  key: 220
};

export default [LANDING_ROUTE, PROJECTS_ROUTE, EXPERIENCES_ROUTE];
