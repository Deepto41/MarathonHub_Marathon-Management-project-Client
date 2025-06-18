import { createBrowserRouter, RouterProvider } from "react-router";
import Errorelements from "../Components/Errorelement/Errorelements";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import Login from "../Components/Shared/Login/Login";
import Regester from "../Components/Shared/Regestrer/Regester";
import Marathons from "../Marathons/Marathons";
import Dashboard from "../Components/Dashboard/Dashboard";
import Addmarathon from "../Components/AddMarathon/Addmarathon";
import Privateroute from "./Privateroute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Errorelements></Errorelements>,
    children: [
      {
        index: true,
        loader: () =>
          fetch("http://localhost:3000/marathonlimit"),
        Component: Home,
      },

      { path: "login", Component: Login },
      { path: "regester", Component: Regester },
      { path: "marathons", Component: Marathons },
      { path: "dashboard", Component: Dashboard },
      {
        path: "addmarathon",
        element: (
          <Privateroute>
            <Addmarathon></Addmarathon>
          </Privateroute>
        ),
      },
    ],
  },
]);
