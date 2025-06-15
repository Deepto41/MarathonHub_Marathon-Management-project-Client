import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Errorelements from "../Components/Errorelement/Errorelements";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import Login from "../Components/Shared/Login/Login";
import Regester from "../Components/Shared/Regestrer/Regester";
import Marathons from "../Marathons/Marathons";


 export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Errorelements></Errorelements>,
    children:[
      {index:true, Component: Home},
      {path:'login', Component:Login},
      {path:'regester', Component:Regester},
      {path:'marathons' , Component:Marathons},
    ]
    
    }
]);