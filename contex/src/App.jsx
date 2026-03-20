import About from "./components/About";
import { DataProvider } from "./components/contextApi";
import Home from "./components/Home";

const App = () => {
  return ( <>
  
  
    <DataProvider>

        <Home/>

        <About/>

    </DataProvider>

    
  </> );
}
 
export default App;