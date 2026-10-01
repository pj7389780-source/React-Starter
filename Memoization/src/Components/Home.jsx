import React from 'react'

const Home = ({users}) => {
    console.log("Home Rendering");
  return (
    <div>
        <h1>User is {users.name}</h1>
      <h1>Home</h1>
    </div>
  )
}

export default React.memo(Home,(prev,next)=>{
    return prev.users.name === next.users.name
})
