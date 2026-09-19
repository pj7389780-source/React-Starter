import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const MyStore = createContext();
export const ContextProvide = ({children})=>{ 
    const [productData, setProductData] = useState([])
    const getData = async()=>{
    const res = await axios.get("https://fakestoreapi.com/products");
    setProductData(res.data)
    }
    useEffect(()=>{
        getData()
    },[])
    return <MyStore.Provider value={{productData,setProductData}}>{children}</MyStore.Provider>
}