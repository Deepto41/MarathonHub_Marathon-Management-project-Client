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
import Details from "../Details/Details";
import Marathonreg from "../Components/Marathonreg/Marathonreg";
import Mymarathonlist from "../Components/Mymarathonlist/Mymarathonlist";
import Myapply from "../Components/Myapply/Myapply";
import { Authcontext } from "../Components/Context/Authcontext";

export const router = createBrowserRouter([

  {
    path: "/",
    Component: Root,
    errorElement: <Errorelements></Errorelements>,
    children: [
      {
        index: true,
        loader: () => fetch("https://marathon-hub-project-server.vercel.app/marathonlimit"),
        Component: Home,
      },

      { path: "login", Component: Login },
      {
        path: "/details/:_id",
        loader: ({ params }) =>
          fetch(`https://marathon-hub-project-server.vercel.app/allmarathon/${params._id}`),
        Component: Details,
      },
      { path: "regester", Component: Regester },

      {
        path: "marathons",
        loader: () => fetch("https://marathon-hub-project-server.vercel.app/allmarathon"),
        element: (
          <Privateroute>
            <Marathons></Marathons>
          </Privateroute>
        ),
      },
      {
        path: "/marathonreg/:_id",
        loader:({params})=> fetch(`https://marathon-hub-project-server.vercel.app/allmarathon/${params._id}`),
        element: (
          <Privateroute>
            <Marathonreg></Marathonreg>
          </Privateroute>
        ),
    
      },
     
      {
        path: "mymarathonlist",
        element: (
          <Privateroute>
            <Mymarathonlist></Mymarathonlist>
          </Privateroute>
        ),
      },
      { path: "dashboard", element: <Privateroute><Dashboard></Dashboard></Privateroute> },
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
