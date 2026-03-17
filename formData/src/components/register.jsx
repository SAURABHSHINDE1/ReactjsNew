const Register = () => {

    const handleForm = (e)=>{
        e.preventDefault()

        let formdata = new FormData(e.target)

        let data = Object.fromEntries(formdata.entries())

        console.log(data)

    }


    return ( <>


    <form onSubmit={handleForm}>

        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
        <br /><br />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
            <br /><br />

        <label htmlFor="male">Male</label>
        <input type="radio" id="male" name="gender" value="male" />
            <br /><br />
        <label htmlFor="female">Female</label>
        <input type="radio" id="female" name="gender" value="female" />
            <br /><br />

        <select name="courses" >
            <option value="Html">Html</option>
            <option value="Css">Css</option>
            <option value="Javascript">Javascript</option>
            <option value="React Js">React Js</option>
            <option value="Node Js">Node Js</option>
        </select>
            <br /><br />

        <button type="submit">Submit</button>

    </form>


    </> );
}
 
export default Register;