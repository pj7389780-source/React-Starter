import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../src/components/Home'
import About from '../src/components/About'
import Contact from '../src/components/Contact'
import Docs from '../src/components/Docs'
import GitHub from '../src/components/GitHub'
import Enterprise from '../src/components/Enterprise'
import Deatil from '../src/components/Deatil'

const AppRouting = () => {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Home/>}>
        <Route path={'Detail'} element={<Deatil/>}/>
        </Route>
        <Route path={'/About'} element={<About/>}/>
        <Route path={'/Contact'} element={<Contact/>}/>
        <Route path={'/Docs'} element={<Docs/>}/>
        <Route path={'/GitHub'} element={<GitHub/>}/>
        <Route path={'/Enterprise'} element={<Enterprise/>}/>
      </Routes>
    </div>
  )
}

export default AppRouting
