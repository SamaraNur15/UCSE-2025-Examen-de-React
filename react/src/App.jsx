import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import MovieDatail from './pages/MovieDetail'
import NotFound from './pages/NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} >
            <Route path="/movie/:id" element={<MovieDatail/>} />
          </Route>
          <Route path='/*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
