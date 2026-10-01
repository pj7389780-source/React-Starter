import React, { useContext } from 'react'
import { MyContext } from '../Context/MyContext'
import { toast } from 'react-toastify';

const Home = () => {
  const { setLoggedIn} = useContext(MyContext);
  return (
    <div>
      <h1>Helooo</h1>
      <button
      onClick={()=>{
        localStorage.setItem("loggedIn",JSON.stringify(null))
        setLoggedIn(null)
        toast.success("Successfully Logged Out")
      }}
      >Logout</button>
    </div>

  )
}

export default Home
