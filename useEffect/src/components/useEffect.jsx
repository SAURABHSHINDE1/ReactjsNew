import { useEffect, useState } from "react";

const GetData = () => {

    const [count , setCount] = useState(0)



    useEffect(()=>{
            document.title =count
    }, [count])

    

    return ( <>

    <h1>Count :{count}</h1>

    <h2>This is useEffect</h2>

    <button onClick={()=>setCount(count + 1)}>Increament</button>
    
    </> );
}
 
export default GetData;