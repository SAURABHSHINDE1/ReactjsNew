import { use, useRef } from "react";

const Refs = () => {

    const inputData = (null)
    const email  = useRef(null)
    const formHeading  = useRef(null)


    const handleSubmit = (e)=>{
        e.preventDefault()

        console.log(inputData.current.value)
        console.log(email.current.value)
        console.log(formHeading.current.innerText)

    }

    return ( <>

    <form onSubmit={handleSubmit}>

        <h1 ref={formHeading}>Register</h1>

        <input type="text" ref={inputData} placeholder="Enter your Name.." />
        <br /><br />

        <input type="text" ref={email} placeholder="Enter your Email .." />

        <button type="submit">Submit</button>

    </form>

    
    </> );
}
 
export default Refs;