import data from '../data.json'
import './loops.css'

const Loops = () => {
    return ( <>

    {
        data.map((elem , index)=>{
            console.log(index)
            return <div className="card" key={index}>
            
            <h1>Id :{elem.id} </h1>

            <h1>Brand : {elem.brand} </h1>

            <h2>Model : {elem.model}</h2>

            <h2>Price : {elem.price}</h2>
            
            <h2>Ram : {elem.ram}</h2>

            <h2>Storage:{elem.storage}</h2>

            <h2>Colour :{elem.color}</h2>

            <h2>Battery:{elem.battery}</h2>

    </div>
        })
    }
    
    </> );
}
 
export default Loops;