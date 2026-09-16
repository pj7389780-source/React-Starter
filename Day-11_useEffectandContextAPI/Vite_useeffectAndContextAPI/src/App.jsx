import React, { useContext, useEffect, useState } from 'react'
import { MyStore } from './Context/MyStore'
import About from './Components/About'
import Home from './Components/Home'

const App = () => {
  const [count, setCount] = useState(0)
  const [toggle, setToggle] = useState(false)

  useEffect(()=>{
  })
  return (
    <div>
      <h1>Hello Duniya - {count}</h1>
      <button onClick={()=>setToggle((prev)=>!prev)}>Change</button>
      {toggle?<About/>:<Home/>}
    </div>
  )
}

export default App
