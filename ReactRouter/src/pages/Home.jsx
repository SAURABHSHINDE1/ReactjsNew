import { NavLink } from "react-router-dom";

const Home = () => {

    return ( <>

    <h1>Hello from Home page </h1>

    <NavLink to="/">Home</NavLink>
        <br /><br />
    <NavLink to="/about"> About</NavLink>
     <br /><br />

    <NavLink to="/contact"> Contact</NavLink>
    
    </> );
}
 
export default Home;