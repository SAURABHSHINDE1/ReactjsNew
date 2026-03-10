import { useState } from "react";

const StateComp = () => {

   
    const [count , setCount] = useState(0)

    return ( <>

        <h1>Count  :{count}</h1>

        <button onClick={()=>{
            if(count < 100){
                setCount(count + 10)
            }
        }}>Increament</button>

        <button onClick={()=>{
            if(count > 0){
                setCount(count - 50)
            }
        }}>decreament</button>

        <button onClick={()=>setCount("kahich nahii")}>Reset</button>

    </> );
}
 
export default StateComp;