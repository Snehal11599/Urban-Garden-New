import Dashboard from "views/Dashboard.js";
import Service from "views/Service";
import AddService from "views/AddService";
import Update from "views/Update";


var routes = [

  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
  },
  {
    
    path: "/Service",
    name: "service card",
    icon: "nc-icon nc-spaceship",
    component: Service,
    layout: "/admin",
  },

  {
    path: "/AddService",
    name: "add service",
    icon: "nc-icon nc-spaceship",
    component: AddService,
    layout: "/admin",
  },
  {
    path: "/Update/:id",
    name: "update",
    icon: "nc-icon nc-spaceship",
    component: Update,
    layout: "/admin",
  }
 
 
];
export default routes;
