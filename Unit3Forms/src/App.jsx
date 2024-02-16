import { useState } from 'react'
import Form from "./form";
import Authenticate from './authenticate';
import './App.css'

function App() {
  const [token, setToken] = useState();
  const [message, setMessage] = useState("");

  // console.log(token);

  return (
    <>
      <Form token={token} setToken={setToken} />
      <Authenticate token={token} message={message} setMessage={setMessage}/>

    </>
  )
}

export default App
