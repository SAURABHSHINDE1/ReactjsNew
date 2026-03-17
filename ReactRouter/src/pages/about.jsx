import { NavLink } from "react-router-dom";
const About = () => {
    return ( <>
    
    <h1>This is About page</h1>

    <NavLink to="/">Home</NavLink>
        <br /><br />
    <NavLink to="/about"> About</NavLink>
     <br /><br />

    <NavLink to="/contact"> Contact</NavLink>
    
    </> );
}
 
export default About;