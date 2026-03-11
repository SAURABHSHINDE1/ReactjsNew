import axios from "axios";
import { useEffect } from "react";
import api from "./baseurl";

const PostData = () => {

    useEffect(()=>{

        const sendData = async()=>{
            try{

                const res = await api.post('/posts',{
                    userId:1001,
                    id:1001,
                    title:"hello my name abc",
                    body:"hello"
                })

                console.log(res.data)
            }
            catch(error){

                console.error(error)

            }
        }

        sendData()

    } , [])

    return ( <>

    </> );
}
 
export default PostData;