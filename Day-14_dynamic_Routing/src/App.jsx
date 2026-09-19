import React from 'react'
import Navbar from './Components/Navbar'
import AppRouting from './Routing/AppRouting'

const App = () => {
  return (
    <div className='px-2 py-3'>
      <Navbar/>
      <AppRouting/>
    </div>
  )
}

export default App
