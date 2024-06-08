import { useState } from 'react'
import './App.css'
import HomeRoute from './Routes/HomeRoute.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <HomeRoute/>
    </>
  )
}

export default App
