import { Home } from "lucide-react";
import { createContext, useState } from "react";
import CheckOut from "../CheckOut";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [dataSet, setDataSet] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(true);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingProduct = prev.find((item) => item.id === product.id);

      if (existingProduct) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const increment = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decrement = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };
  const checkout = (total)=>{
    total>0?<CheckOut/>:<Home/>;
  }
  return (
    <MyStore.Provider
      value={{
        dataSet,
        setDataSet,
        cartItems,
        setCartItems,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        increment,
        decrement,
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
