import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./pages/navbar";
import Service from "./pages/service";
import Contact from "./pages/contact";
import About from "./pages/about";
import Footer from "./pages/footer";
const App = () => {

  const router = createBrowserRouter([

    {
      path:"/",
      element: <> <Navbar/>  <Home/> <Footer/> </>
    },

    {
      path:"/about",
      element:<> <Navbar/> <About/> <Footer/> </>
    },

    {
      path:"/service",
      element:<> <Navbar/> <Service/> <Footer/> </>
    },

    {
      path:"/contact",
      element:<> <Navbar/> <Contact/> <Footer/> </>
    },

  ])

  return <RouterProvider router={router}></RouterProvider>
}
 
export default App;