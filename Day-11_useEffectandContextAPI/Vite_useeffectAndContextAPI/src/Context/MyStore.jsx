import { createContext, useState } from "react";


export const MyStore = createContext();
export const ContextProvide = ({children})=>{ 
    const [count, setCount] = useState(0)
    console.log("MyStore");

    return <MyStore.Provider value={{count,setCount}}>{children}</MyStore.Provider>
}