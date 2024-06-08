import { useState } from 'react'
import './App.css'
import HomeRoute from './Routes/HomeRoute.jsx'
import BlogsRoute from './Routes/BlogRoute.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BlogsRoute/>
      
    </>
  )
}

export default App
