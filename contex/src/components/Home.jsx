import { useContext } from "react";
import { container } from "./contextApi";

const Home = () => {

    const {name , userage} = useContext(container)

    return ( <>

    <h1>This is Home Page</h1>

    <h1>Hello my name is  {name} and my age is {userage}</h1>
    
    </> );
}
 
export default Home;