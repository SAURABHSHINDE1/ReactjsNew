import { createContext } from "react";

export const container = createContext()

export const DataProvider = ({children})=>{

    let data = "Prajwal"
    let age = 21


    return <container.Provider value={{name:data , userage : age}}>

        {children}

    </container.Provider>

}