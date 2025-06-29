// import { AboutPage } from "./pages/AboutPage";
// import { ServicesPage } from "./pages/ServicesPage";
// import { ContactPage } from "./pages/ContactPage";

import { ContactPage } from "../pages/ContactUs";
import { HomePage } from "../pages/Home";

export const ROUTES = [
  {
    path: "/",
    component: HomePage,
    exact: true,
    label: "Home",
  },
  //   {
  //     path: "/about",
  //     component: AboutPage,
  //     label: "About",
  //   },
  //   {
  //     path: "/services",
  //     component: ServicesPage,
  //     label: "Services",
  //   },
  {
    path: "/contact",
    component: ContactPage,
    label: "Contact",
  },
];

// eslint-disable-next-line
// @ts-ignore
export const getRouteConfig = (path) => {
  return ROUTES.find((route) => route.path === path) || ROUTES[0]; // Fallback to home
};
