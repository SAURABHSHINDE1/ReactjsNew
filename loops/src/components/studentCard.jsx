import studData from '../studentdata.json'
import Card from './card';
import './studentcard.css'
const StudentCard = () => {
    return ( <>

        {
            studData.map((elem ,index)=>{

                return <Card key={index} data={elem} />

            })
        }
    
    </> );
}
 
export default StudentCard;