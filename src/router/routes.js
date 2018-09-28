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

// const LandingPageEntrypoint = Loadable({
//   loader: () =>
//     import(/* webpackChunkName: "LandingPageEntrypoint" */ "../entrypoints/LandingPage"),
//   loading: Loading,
//   modules: ["LandingPageEntrypoint"]
// });

// const ProjectsEntrypoint = Loadable({
//   loader: () =>
//     import(/* webpackChunkName: "ProjectsEntrypoint" */ "../entrypoints/Projects"),
//   loading: Loading,
//   modules: ["ProjectsEntrypoint"]
// });

// NOTE TEST
const HomeEntrypoint = Loadable({
  loader: () =>
    import(/* webpackChunkName: "HomeEntrypoint" */ "../entrypoints/Home"),
  loading: Loading,
  modules: ["HomeEntrypoint"]
});

const MoviesEntrypoint = Loadable({
  loader: () =>
    import(/* webpackChunkName: "MoviesEntrypoint" */ "../entrypoints/Movies"),
  loading: Loading,
  modules: ["MoviesEntrypoint"]
});

//////////////////////////////////////////////////
/**
 * Routes base
 */
//////////////////////////////////////////////////
// export const LANDING_ROUTE = {
//   exact: true,
//   navTitle: "Hem",
//   slug: "/",
//   component: LandingPageEntrypoint
// };

// export const PROJECTS_ROUTE = {
//   exact: false,
//   navTitle: "Projekt",
//   slug: "/projekt/",
//   component: ProjectsEntrypoint
// };

export const HOME_ROUTE = {
  exact: true,
  navTitle: "Hem",
  path: "/",
  component: HomeEntrypoint
};

export const MOVIES_ROUTE = {
  exact: true,
  navTitle: "Filmer",
  path: "/filmer/",
  component: MoviesEntrypoint
};

export default [HOME_ROUTE, MOVIES_ROUTE];
