import React from 'react'
import {Routes,Route} from 'react-router'
import Home from '../Pages/Home'
import Categories from '../Pages/Categories'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import ProductDetails from '../Components/ProductDetails'


const AppRouting = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/Categories"} element={<Categories />} />
        <Route path={"/About"} element={<About />} />
        <Route path={"/Contact"} element={<Contact />} />
        <Route path={'/product/:id'} element = {<ProductDetails/>}/>
      </Routes>
    </div>
  );
}

export default AppRouting
