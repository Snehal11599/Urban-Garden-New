import Dashboard from "views/Dashboard.js";
import Update1 from 'views/Update1'
import AddArticles from './views/AddArticles';
import Article from './views/Article'
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
    path: "/AddArticles",
    name: "AddArticles  ",
    icon: "nc-icon nc-paper",
    component: AddArticles,
    layout: "/admin",
  }, {
    path: "/Update1/:id",
    name: "UpdateData  ",
    icon: "nc-icon nc-paper",
    component: Update1,
    layout: "/admin",
  }
  , {
    path: "/Article",
    name: "Articles_Table",
    icon: "nc-icon nc-paper",
    component: Article,
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
