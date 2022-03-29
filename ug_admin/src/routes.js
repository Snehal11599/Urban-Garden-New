import Dashboard from "views/Dashboard.js";
import AddArticles from './views/articles/AddArticles';
import Article from './views/articles/Article'
import Service from "views/service/Service";
import AddService from "views/service/AddService";
import Update from "views/service/Update";
import ReceiveQuote from "views/admin/ReceiveQuote";
import UpdateArticles from "views/articles/UpdateArticles";
import EditQuote from "views/admin/EditQuote";


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
    path: "/UpdateArticles/:id",
    name: "Updatearticles  ",
    icon: "nc-icon nc-paper",
    component: UpdateArticles,
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
    name: "Service_Table",
    icon: "nc-icon nc-spaceship",
    component: Service,
    layout: "/admin",
  },

  {
    path: "/AddService",
    name: "Add Service",
    icon: "nc-icon nc-spaceship",
    component: AddService,
    layout: "/admin",
  },
  {
    path: "/Update/:id",
    name: "Update Service",
    icon: "nc-icon nc-spaceship",
    component: Update,
    layout: "/admin",
  },
  {
    path: "/ReceiveQuote",
    name: "receive quote",
    icon: "nc-icon nc-spaceship",
    component: ReceiveQuote,
    layout: "/admin",
  },
  {
    path: "/EditQuote/:id",
    name: "Edit quote",
    icon: "nc-icon nc-spaceship",
    component:EditQuote,
    layout: "/admin",
  }
 
 
];
export default routes;
