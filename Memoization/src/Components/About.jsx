import React from 'react'

const About = ({users}) => {
    console.log("About Rendering");
  return (
    <div>
        <h1>User is {users.name}</h1>
      <h1>About</h1>
    </div>
  )
}

export default React.memo(About,(prevProps,nextProps)=>{
    return prevProps.users.name === nextProps.users.name
})
