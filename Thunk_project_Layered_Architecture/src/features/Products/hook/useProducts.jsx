import { useQuery } from "@tanstack/react-query"
import { getAllProducts, getProductByCategory, getProductCategories } from "../api/ProductAPI"
import { useEffect, useState } from "react"

export const useAllProducts = ()=>{
    const [search, setSearch] = useState(null)
    const [titleSearch, setTitleSearch] = useState(null)
    useEffect(()=>{
        let timeout = setTimeout(() => {
            setTitleSearch(search)
        }, 1000);
        return ()=>clearTimeout(timeout)
    },[search])
    const {data,isPending,error} = useQuery({
        queryKey:["Products",titleSearch],
        queryFn:()=>getAllProducts(titleSearch),
    })
    return {
      data,
      isPending,
      error,
      search,
      setSearch,
    };
}
export const getAllcategories = ()=>{
    const { data, isPending, error } = useQuery({
      queryKey: ["All-Categories"],
      queryFn: getProductCategories,
    });
    return {
      data,
      isPending,
      error,
    };
}
export const getProductviaCategory = () => {
    const [categroy, setCategroy] = useState(null)
  const { data, isPending, error } = useQuery({
    queryKey: ["All-Categories",categroy],
    queryFn: ()=>getProductByCategory(categroy),
  });
  return {
    data,
    isPending,
    error,
    setCategroy,
    categroy
  };
};


