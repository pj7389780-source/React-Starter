import React, { useEffect } from 'react'

const About = () => {
  let inter = setInterval(() => {
    console.log("hiii");
  }, 1000);
    console.log("About");
    useEffect(()=>{
      return ()=>{
        clearInterval(inter)
      }
    })


  return (
    <div>
      <h1>I am About</h1>
    </div>
  )
}

export default About