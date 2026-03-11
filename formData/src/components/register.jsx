const Register = () => {


    const handleForm = (e)=>{
        e.preventDefault()

        console.log(e.target)

        let formdata = new FormData(e.target)

        let data = Object.fromEntries(formdata.entries())

        console.log(data)

    }


    return ( <>

        <form onSubmit={handleForm}>

            <input type="text" name="username" placeholder="Enter Name" />
            <br /><br />

            <input type="email" name="email" placeholder="Enter Email" />
            <br /><br />

            <label htmlFor="">Male</label>
            <input type="radio" name="gender" value="male"/>
            <br /><br />

            <label htmlFor="">feMale</label>
            <input type="radio" name="gender" value="female"/>

            <button type="submit">submit</button>

        </form>
    
    </> );
}
 
export default Register;