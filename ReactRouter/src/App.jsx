import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./pages/navbar";
import Service from "./pages/service";
import Contact from "./pages/contact";
import About from "./pages/about";
import Footer from "./pages/footer";
import AppLayout from "./pages/applayout";
const App = () => {

  const router = createBrowserRouter([

    {
      path:"/",
      element:<AppLayout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },

        {
          path:"/about",
          element:<About/>
        },

        {
          path:"/service",
          element:<Service/>
        },

        {
          path:"/contact",
          element:<Contact/>
        }
      ]
    }
    

  ])

  return <RouterProvider router={router}></RouterProvider>
}
 
export default App;