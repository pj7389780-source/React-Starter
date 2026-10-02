import axios from "axios";
import { useEffect, useState } from "react";

export const data = ()=>{
    const [usersData, setUsersData] = useState([]);
    const [search, setSearch] = useState("");
    const [afterfilter, setafterfilter] = useState([]);
    const getdata = async () => {
      try {
        let data = await axios.get("https://fakestoreapi.com/products");
        setUsersData(data.data);
        setafterfilter(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      getdata();
    }, []);
    const filtering = () => {
      let filteredData = usersData.filter((elem) => {
        return elem.title.toLowerCase().includes(search.toLowerCase());
      });
      setafterfilter(filteredData);
    };
    useEffect(() => {
      let timeout = setTimeout(() => {
        filtering();
      }, 700);
      return () => clearTimeout(timeout);
    }, [search]);
    
    return {
      setSearch,
      afterfilter,
    };
}