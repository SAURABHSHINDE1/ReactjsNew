import { useState } from 'react';
import './toggleButton.css'

const ToggleButton = () => {

    const [ison ,setIson] = useState(false)

    const HandleClick = ()=>{
        setIson(!ison)
    }

    return ( <>

        <h1>Toggel Switch</h1>

        <div className={`main ${ison ? "open" :""}`} onClick={HandleClick}>

            <div className={`switch ${ison ? "on" :"off"}`}>

                    <h1>{ison ? "ON" : "OFF"}</h1>

            </div>

        </div>

    
    </> );
}
 
export default ToggleButton;