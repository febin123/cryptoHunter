import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Coinpage from './Pages/Coinpage';
import Header from './Components/Header';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        
        <Route path='/' element={<Homepage/>}/>
        <Route path='/coins/:id' element={<Coinpage/>}/>
      
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
