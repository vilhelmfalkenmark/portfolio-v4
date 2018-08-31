import universal from "react-universal-component";

// AsyncLoading Higher order component
import LoadingPlaceholder from "components/LoadingPlaceholder";

// Skeleton placeholders for code-splitting loading state
import FaqSkeleton from "components/Skeletons/FaqSkeleton";

// Hero Placeholder component
import Hero from "components/Hero";

// Svg icons for Navbar
import home from "assets/svg/home.svg";
import guestList from "assets/svg/guest-list.svg";
import faq from "assets/svg/faq.svg";

//////////////////////////////////////////////////
/**
 * CODE SPLITTING CHUNKS
 */
//////////////////////////////////////////////////
const LandingPage = universal(
  () => import(/* webpackChunkName: 'landingpage' */ "entrypoints/LandingPage"),
  {
    resolve: () => require.resolveWeak("entrypoints/LandingPage"),
    chunkName: "landingpage",
    loading: LoadingPlaceholder({
      SkeletonPlaceholderComponent: Hero,
      withRibbonHeading: false
    })
  }
);

// FAQ
const Faq = universal(
  () => import(/* webpackChunkName: 'faq' */ "entrypoints/Faq"),
  {
    resolve: () => require.resolveWeak("entrypoints/Faq"),
    chunkName: "faq",
    loading: LoadingPlaceholder({
      SkeletonPlaceholderComponent: FaqSkeleton,
      withRibbonHeading: true
    })
  }
);

//  Projects
const Projects = universal(
  () => import(/* webpackChunkName: 'rsvp' */ "entrypoints/Projects"),
  {
    resolve: () => require.resolveWeak("entrypoints/Projects"),
    chunkName: "projects",
    loading: LoadingPlaceholder({
      SkeletonPlaceholderComponent: FaqSkeleton,
      withRibbonHeading: true
    })
  }
);

//////////////////////////////////////////////////
/**
 * Routes base
 */
//////////////////////////////////////////////////
export const HOME_ROUTE = {
  exact: true,
  navTitle: "Hem",
  slug: "/",
  icon: home,
  largeIcon: false,
  component: LandingPage
};

export const PROJECTS_ROUTE = {
  exact: false,
  navTitle: "Projekt",
  slug: "/projekt/",
  icon: guestList,
  largeIcon: false,
  component: Projects
};

export const FAQ_ROUTE = {
  exact: false,
  navTitle: "Frågor och svar",
  slug: "/fragor-och-svar/",
  icon: faq,
  largeIcon: true,
  component: Faq
};

export default [HOME_ROUTE, PROJECTS_ROUTE, FAQ_ROUTE];
