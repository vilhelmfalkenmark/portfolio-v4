import express from 'express';
import renderer from 'renderer';
import configureStore from 'store';
import promiseResolve from 'utils/helpers/promises';
import { pluckSlug } from 'utils/network/url';

import { fetchProjects, fetchProjectDetails } from 'store/projects/actions';

const router = express.Router();

/**
 * Projects
 */
const fetchProjectsContent = ({ store, req, res, next }) =>
  promiseResolve(fetchProjects({ store, isServer: true })())
    .then(storeWithContent => {
      renderer(storeWithContent)(req, res, next);
    })
    .catch(err => {
      renderer(store)(req, res, next, err);
    });

const fetchProjectDetailsContent = ({ store, req, res, next }) =>
  promiseResolve(
    fetchProjectDetails({ store, isServer: true, slug: pluckSlug(req.url) })()
  )
    .then(storeWithContent => {
      renderer(storeWithContent)(req, res, next);
    })
    .catch(err => {
      renderer(store)(req, res, next, err);
    });

// ///////////////////////////////////////////////////////////////
/**
 * Routing
 */
// ///////////////////////////////////////////////////////////////
export default () => {
  /**
   * Projects
   */
  router.get('/projekt/:slug/', (req, res, next) => {
    fetchProjectDetailsContent({ store: configureStore(), req, res, next });
  });
  router.get('/projekt/', (req, res, next) => {
    fetchProjectsContent({ store: configureStore(), req, res, next });
  });

  /**
   * Landing page
   */
  router.get('/', (req, res, next) => {
    fetchProjectsContent({ store: configureStore(), req, res, next });
  });

  /**
   * 404
   */
  router.get('*', (req, res, next) => {
    fetchProjectsContent({ store: configureStore(), req, res, next });
  });

  // router.use("/erfarenheter/", null);
  return router;
};

// const actionIndex = (req, res, next) => {
//   fetchEntryPointContent({ store: configureStore(), req, res, next });
// };

// router.get("*", actionIndex);

// export default router;
