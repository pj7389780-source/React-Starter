import React,{useRef} from 'react'
import Form from './components/Form'
const App = () => {
 const formRef = useRef({});
 console.log(formRef);
 
  return (
    <div>
      <Form/>
    </div>
  )
}

export default App
