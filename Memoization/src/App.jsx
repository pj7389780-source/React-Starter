import React, { useState } from 'react'
import Home from './Components/Home'
import About from './Components/About'

const App = () => {
  const [users, setUsers] = useState({name:"Paras",id:102})
  console.log("App Rendering")
  return (
    <div>
      <h1>Hello</h1>
      <h1>Name is {users.name}</h1>
      <button onClick={() => setUsers({ ...users, name: "Rajesh" })}>
        Change name
      </button>
      <Home users={users} />
      <About users={users} />
    </div>
  );
}

export default App
