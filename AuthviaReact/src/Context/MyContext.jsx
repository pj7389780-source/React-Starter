import { createContext, useState } from "react";
import { useNavigate } from "react-router";

export const MyContext = createContext()

export const ContextProvider = ({children})=>{
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem("Users")) || [])
    const [loggedIn, setLoggedIn] = useState(JSON.parse(localStorage.getItem("loggedin")) || null)
    return (
      <MyContext.Provider
        value={{
          users,
          setUsers,
          loggedIn,
          setLoggedIn,
        }}
      >
        {children}
      </MyContext.Provider>
    );
}