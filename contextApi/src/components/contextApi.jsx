import { createContext } from "react";

export const  dataContext = createContext()

export const DataProvider = ({children})=>{

    let sname = "saurabh"

    return <dataContext.Provider value={{studName:sname}}>

        {children}
 
    </dataContext.Provider>

}