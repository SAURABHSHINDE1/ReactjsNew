import { useContext } from "react";
import { container } from "./contextApi";

const About = () => {

    const {name , userage} = useContext(container)

    return ( <>

    <h1>This is About page</h1>

    <h1>{name} and {userage}</h1>


    </> );
}
 
export default About;