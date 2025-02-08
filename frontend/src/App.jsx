import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'


function App() {
  const [name, setname] = useState()

  useEffect(()=>{
    axios.get('/api/name')
    .then((response)=>{
       setname(response.data)
    })
    .catch((error)=>{
console.log(error)
    })
  })



  return (
    <>
  
<h1> hii</h1>

<h1>{name}</h1>

    </>
  )
}

export default App
