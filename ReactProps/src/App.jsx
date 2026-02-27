import About from "./components/About";
import Home from "./components/Home";

const App = () => {

  let sname = "Prajwal"

  let age  = 23

  return ( <>

    <h1>React Props</h1>

    <Home name={sname} sage={age}/>

  

  </> );
}
 
export default App;