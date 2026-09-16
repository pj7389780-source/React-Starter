import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar'
import ProductCard from './components/ProducCard'
import Cart from './Pages/Cart'
import { MyStore } from './Context/MyStore'


const App =  () => {
  const { setDataSet, dataSet, isCartOpen, cartItems } = useContext(MyStore);
  const getData = async ()=>{
    let data = await axios.get("https://fakestoreapi.com/products");
   setDataSet(data.data) 
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="flex flex-col gap-10 p-5">
      <Navbar />
      {isCartOpen ? (
        <div className="grid grid-cols-4 gap-4 px-5">
          {dataSet.map((elem,index) => {
            let isProduct = cartItems.find((val)=>val.id === elem.id)
            console.log(isProduct);
            
            return (
              <ProductCard 
              isProduct={isProduct} 
              key={elem.id} 
              product={elem}/>
            );
          })}
        </div>
      ) : (
        <div>
          <Cart/>
        </div>
      )}
    </div>
  );
}

export default App
