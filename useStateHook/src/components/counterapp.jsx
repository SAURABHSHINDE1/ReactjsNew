import { useState } from "react";

const CounterApp = () => {

    const [abc , setAbc] = useState(0)

    const [ison , setIson] = useState(false)

    return ( <>

    <h1>The value is :{abc}</h1>


    <button onClick={()=> setAbc(abc + 10)}>increamnet </button>

    <button onClick={()=> setAbc(abc - 10)}>decreament</button>

    <button onClick={()=> setAbc(0)}>Reset</button>

    <button onClick={()=> setAbc("saurabh")}>set name</button>


    <h1>{ison ? "light mode " : "dark mode"}</h1>



    <button onClick={()=>setIson(!ison)}>change State</button>
    
    
    </> );
}
 
export default CounterApp;