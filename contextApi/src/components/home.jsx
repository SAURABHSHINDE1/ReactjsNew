import { useContext } from "react";
import { dataContext } from "./contextApi";

const Home = () => {

    const {studName} = useContext(dataContext)


    return ( <>

    <h1>Hello from Home Page {studName}</h1>
    
    </> );
}
 
export default Home;