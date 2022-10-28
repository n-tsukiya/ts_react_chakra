import { Home } from "../components/pages/Home";
import { Setting } from "../components/pages/Setting";
import { Useranagement } from "../components/pages/Useranagement";

export const homeRoutes = [
  {
    path: "/home",
    children: <Home />,
  },
  {
    path: "/home/user_management",
    children: <Useranagement />,
  },
  {
    path: "/home/setting",
    children: <Setting />,
  },
];
