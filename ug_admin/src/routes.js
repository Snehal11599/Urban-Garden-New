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
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import TableList from "views/Tables.js";
import Maps from "views/Map.js";
import UserPage from "views/User.js";
import UpgradeToPro from "views/Upgrade.js";
import Add_Articles from "views/Add_Articles";
import Update1 from 'views/Update1'
import ArticleTable from "./views/ArticleTable";
import Material_Table from "./views/Material_Table";
import BasicTable from "./views/BasicTable"
import UserTable from "./views/UserTable";
import Edit from "./views/Edit";
import AddArticles from './views/AddArticles';
import Service from './views/Service'
var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-diamond",
    component: Icons,
    layout: "/admin",
  },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "nc-icon nc-pin-3",
  //   component: Maps,
  //   layout: "/admin",
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "nc-icon nc-bell-55",
  //   component: Notifications,
  //   layout: "/admin",
  // },
  // {
  //   path: "/user-page",
  //   name: "User Profile",
  //   icon: "nc-icon nc-single-02",
  //   component: UserPage,
  //   layout: "/admin",
  // },
  // {
  //   path: "/tables",
  //   name: "Table List",
  //   icon: "nc-icon nc-tile-56",
  //   component: TableList,
  //   layout: "/admin",
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "nc-icon nc-caps-small",
  //   component: Typography,
  //   layout: "/admin",
  // },
  // {
  //   pro: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "nc-icon nc-spaceship",
  //   component: UpgradeToPro,
  //   layout: "/admin",
  // },
  // 
  {
    path: "/ArticleTable",
    name: "Article_Table",
    icon: "nc-icon nc-paper",
    component:ArticleTable,
    layout: "/admin",
   },
  {
    path: "/AddArticles",
    name: "AddArticles",
    icon: "nc-icon nc-paper",
    component:AddArticles,
    layout: "/admin",
  }
  // ,{
  //   path: "/UpdateTable",
  //   name: "UpdateTable",
  //   icon: "nc-icon nc-paper",
  //   component:Update,
  //   layout: "/admin",
  // }
  ,{
    path: "/Update1",
    name: "Update1",
    icon: "nc-icon nc-paper",
    component:Update1,
    layout: "/admin",
  }
  ,{
    path: "/Service",
    name: "Service",
    icon: "nc-icon nc-paper",
    component:Service,
    layout: "/admin",
  }

];
export default routes;
