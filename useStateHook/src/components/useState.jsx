import { use, useState } from "react";

const State = () => {

    // let abc = 13

    console.log(useState(0))

    // abc = state varibale 
    // setAbc = state Function
    // useState(20) = 20 is the initial value of abc varibale 

    const [abc , setAbc]  = useState(20)

    return ( <>

        <h1>UseState</h1>


            <h1>{abc}</h1>

        {/* <h1>The value is : {abc}</h1>

        <button onClick={()=>{
             abc++
             console.log(abc)
        }}>click mi </button> */}
    
    </> );
}
 
export default State;