import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BlogsRoute from './routes/BlogsRoute'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BlogsRoute>
        
      </BlogsRoute>
      
    </>
  );
}

export default App
