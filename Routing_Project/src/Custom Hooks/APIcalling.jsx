import axios from "axios";
import { useEffect, useState } from "react";

export const APIcalling = ()=>{
    const [productData, setProductData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
      let data = await axios.get("https://fakestoreapi.com/products");
      setProductData(data.data);
      setLoading(false);
    };
    useEffect(() => {
      getData();
    }, []);
    const [User, setUser] = useState([]);

    const getUserData = async () => {
      let data = await axios.get("https://fakestoreapi.com/users");
      setUser(data.data);
      setLoading(false);
    };
    useEffect(() => {
      getUserData();
    }, []);
    return { loading, productData, User };
}

