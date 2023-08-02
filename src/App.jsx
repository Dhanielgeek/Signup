import React from 'react'
import { Confirmation, Explore, Login, SignUp} from './Components'
import {BrowserRouter, Routes, Route} from 'react-router-dom'



const App = () => {
  return (
 <>
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<Explore/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/signup' element={<SignUp/>}/>
  <Route path='/confirm' element={<Confirmation/>}/>
 </Routes>
 </BrowserRouter>
 </>
  )
}

export default App