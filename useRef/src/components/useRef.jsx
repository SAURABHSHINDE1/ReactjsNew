import { useRef } from "react";

const UseRef = () => {


    const inputval = useRef(null)

    const heading  = useRef(null)

    console.log(heading.current)

    const handleSubmit =(e)=>{
        e.preventDefault()


        console.log(inputval.current.value)

    }


    return ( <>

      <form action="" onSubmit={handleSubmit}>

          <input type="text" ref={inputval} placeholder="Enter text..." />

          <button type="submit">submit</button>

      </form>


      <h1 ref={heading}>hello</h1>
    
    </> );
}
 
export default UseRef;