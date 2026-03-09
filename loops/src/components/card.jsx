const Card = ({elem}) => {
    return ( 
         <div className="card">
            <h1>Name:{elem.name}</h1>

            <h2>Age:{elem.age}</h2>

            <h2>Gender:{elem.gender}</h2>

            <h2>Course :{elem.course}</h2>

            <h2>Year:{elem.year}</h2>

            <h2>Email :{elem.email}</h2>

            <h2>Phone no :{elem.phone}</h2>
          </div>
     );
}
 
export default Card;