import { NavLink } from "react-router-dom";

const Navbar = () => {

    return ( <>

    <div className="navbar">

        <div className="logo">
            <h1>Design</h1>
        </div>

        <div className="menus">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/service">Service</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </div>

    </div>
    
    </> );
}
 
export default Navbar;
