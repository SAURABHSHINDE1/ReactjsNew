const Card = ({data}) => {
    return ( <>

     <div className="box">

            <h1>Student Name : {data.name}</h1>

            <h2>Age :{data.age} </h2>

            <h2>Gender :{data.gender}</h2> 

            <h2>Course :{data.course}</h2>

            <h2>Email : {data.email}</h2>

        </div>
    
    </> );
}
 
export default Card;