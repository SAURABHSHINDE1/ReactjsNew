import axios from 'axios'
import { useEffect, useState } from 'react';

const GetData = () => {

    const [userData , setUserData] = useState([])
    const [loading , setLoading] = useState(true)

    console.log(userData)

    useEffect(()=>{

        const fetchdata = async()=>{

            try{

                const res = await axios.get('https://jsonplaceholder.typicode.com/posts')


              setUserData(res.data)

            setLoading(false)

            }
            catch(error){
                console.error(error.message)

            }

    }

    fetchdata()

    } , [])

    if(loading){
        return <h1>Loadding ........</h1>
    }
    
  

    return ( <>

        {
            userData.map((elem ,index)=>{
                return <div key={index}>

                    <h1> body: {elem.body}</h1>
                    <h2>Title:{elem.title} </h2>

                </div>
            })
        }

    </> );
}
 
export default GetData;