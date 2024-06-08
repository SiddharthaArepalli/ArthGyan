import { useState } from 'react'
import './App.css'
import HomeRoute from './Routes/HomeRoute.jsx'
import BlogsRoute from './Routes/BlogRoute.jsx'
import FinlogixWidget from './components/TrendsComponents/FinlogixWidget.jsx'

import TrendsRoute from './Routes/TrendsRoute.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      {/* <BlogsRoute/> */}
      {/* <TrendsRoute>
       
      </TrendsRoute> */}
      <BlogsRoute></BlogsRoute>
      
    </>
  )
}

export default App
