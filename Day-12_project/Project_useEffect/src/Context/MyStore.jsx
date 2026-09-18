import { createContext, useState } from "react";


export const MyStore = createContext()

export const ContextProvider = ({children})=>{
    const [dataSet, setDataSet] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(true);

    let increment = (id)=>{
      setCartItems((prev)=>{
        return prev.map((val)=>{
          return val.id === id?{...val,quantity:val.quantity+1}:val
        })
      })
    }
    let decrement = (id) => {
      setCartItems((prev) => {
        return prev.map((val) => {
          return val.id === id ? { ...val, quantity: val.quantity - 1 } : val;
        });
      });
    };
    return (
      <MyStore.Provider
        value={{
          dataSet,
          setDataSet,
          cartItems,
          setCartItems,
          isCartOpen,
          setIsCartOpen,
          increment,
          decrement,
        }}
      >
        {children}
      </MyStore.Provider>
    );
}