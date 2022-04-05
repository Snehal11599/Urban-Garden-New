import Dashboard from "views/Dashboard.js";
import News from './views/news/News'
import Service from "views/service/Service";
import AddService from "views/service/AddService";
import Update from "views/service/Update";
import ReceiveQuote from "views/admin/ReceiveQuote";
import UpdateNews from "views/news/UpdateNews";
import EditQuote from "views/admin/EditQuote";
import AddNews from "./views/news/AddNews";


var routes = [

  
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
  

  },
  {
    path: "/News",
    name: "News Table",
    icon: "nc-icon nc-paper",
    component: News,
    layout: "/admin",
  },
  {
    path: "/AddNews",
    name: "AddNews  ",
    icon: "nc-icon nc-paper",
    component: AddNews,
    layout: "/admin",
  }, {
    path: "/UpdateNews/:id",
    name: "UpdateNews  ",
    icon: "nc-icon nc-paper",
    component: UpdateNews,
    layout: "/admin",
  }
  , 
  {
    path: "/Service",
    name: "Service_Table",
    icon: "nc-icon nc-spaceship",
    component: Service,
    layout: "/admin",
  }, {
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
    icon: "nc-icon nc-caps-small",
    component: ReceiveQuote,
    layout: "/admin",
  },
  {
    path: "/EditQuote/:id",
    name: "Edit quote",
    icon: "nc-icon nc-caps-small",
    component: EditQuote,
    layout: "/admin",
  }


];
export default routes;
