import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Navbar from "./navbar";

const AppLayout = () => {
    return ( <>

    <Navbar/>

        <Outlet/>

    <Footer/>
    
    </> );
}
 
export default AppLayout;