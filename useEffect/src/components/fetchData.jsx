import { useEffect, useState } from "react"

const FetchData = () => {

    const [count , setCout] = useState(0)

    const [apidata , setApiata] = useState([])

    const getData = async()=>{

        let res =await fetch('https://jsonplaceholder.typicode.com/posts')

        let data = await res.json()

        setApiata(data)
    }

    console.log(apidata)



    useEffect(()=>getData() ,[])


    return ( <>

        <h1>Api data</h1>

        <h2>Count : {count}</h2>

        <button onClick={()=>setCout(count + 1)}>Increament</button>

    
    </> );
}
 
export default FetchData;