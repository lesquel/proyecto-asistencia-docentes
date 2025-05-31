import { $, useManageComponent } from "./../../js/utils/index.js";
import { siteRoutes } from "./../../js/routes/site.routes.js";
import { authRoutes } from "../../js/routes/auth.routes.js";

const nav = new useManageComponent({
  className: "button-container",
  element: "nav",
  inner: "holaaa",
  attributes: {
    id: "nav",
  },
});

const list = [];
siteRoutes.forEach((route) => {
  const a = new useManageComponent({
    className: "button",
    element: "a",
    inner: route.label,
    attributes: {
      id: route.label + "_link",
      href: "#" + route.path,
      "data-link": true,
    },
  });

  const icon = new useManageComponent({
    className: "icon",
    element: "img",
    inner: "",
    attributes: {
      src: route.icon,
    },
  });
  a.addInner(icon.component);
  list.push(a.component);
});



const login = new useManageComponent({
  className: "button",
  element: "a",
  inner: authRoutes[0].label,
  attributes: {
    href: "#" + authRoutes[0].path,
    "data-link": true,
  },
});

const loginIcon = new useManageComponent({
  className: "icon",
  element: "img",
  inner: "",
  attributes: {
    src: authRoutes[0].icon,
  },
});

login.addInner(loginIcon.component);
nav.addInner([...list, login.component]);
nav.insertIn("#button-container");
