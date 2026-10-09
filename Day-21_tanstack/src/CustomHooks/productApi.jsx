import { useQuery } from "@tanstack/react-query";
import { getDataApi } from "../api/productApi";

export const useProductApi =  () =>{
    const {data,isPending,error} = useQuery({
        queryKey: ["products"],
        queryFn: getDataApi,
        staleTime:5000,
      });
     return {
        data,isPending,error
     }
}