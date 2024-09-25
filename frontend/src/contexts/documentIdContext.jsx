import { createContext, useContext, useState } from "react";

const DocumentIdContext = createContext()

export const useParentDocId = () =>{
    return useContext(DocumentIdContext)
}

export default function DocumentIdContextProvider({children}){
    const [parentDocId,setParentDocId] = useState(null)

    return <DocumentIdContext.Provider value={{parentDocId,setParentDocId}}>
        {children}
    </DocumentIdContext.Provider>
}