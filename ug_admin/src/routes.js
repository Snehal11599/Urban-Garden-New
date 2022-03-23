/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Update1 from 'views/Update1'
import AddArticles from './views/AddArticles';
import Article from './views/Article'
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
  }

];
export default routes;
