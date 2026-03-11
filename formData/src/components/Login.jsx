import { useState } from "react";

const LoginForm = () => {

    const [inputval , setInputval] = useState('')

    const [password , setPassword] = useState('')
    return ( <>
    
                <h1> Name : {inputval}</h1>
                <h2>Password : {password}</h2>

        <form>

                <label htmlFor="">Name :</label>
                <input type="text" onChange={(e)=> setInputval(e.target.value)}/>

                <label htmlFor="">Password</label>
                <input type="text" onChange={(e)=> setPassword(e.target.value)}/>

                <button type="submit">Submit</button>

        </form>

    </> );
}
 
export default LoginForm;