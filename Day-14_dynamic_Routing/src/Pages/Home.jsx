import React, { useContext } from 'react'
import { MyStore } from '../Context/MyStore'
import ProductCard from '../Components/ProductCard'

const Home = () => {
  const {productData} = useContext(MyStore)
  return (
    <div className='flex flex-wrap gap-10 px-10 py-9'>
      {productData.map((elem)=>{
        return <ProductCard key={elem.id} product = {elem}/>
      })}
    </div>
  )
}

export default Home
