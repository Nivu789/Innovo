import { createContext, useContext, useState } from "react";

const DropdownContext = createContext()

export const useDropdownContext = () =>{
    return useContext(DropdownContext);
}

export default function DropdownContextProvider({children}){
    const [isOpen,setIsOpen] = useState(false)
    return (
    <DropdownContext.Provider value={{isOpen,setIsOpen}}>
        {children}
    </DropdownContext.Provider>
    )
}