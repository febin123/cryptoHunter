import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Coinpage from './Pages/Coinpage';
import Header from './Components/Header';


const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

const App = () => {
  const classes=useStyles()
  return (
    <div>
      <BrowserRouter>
      <div className={classes.App}>
      <Header/>
      <Routes>
        
        <Route path='/' element={<Homepage/>} exact/>
        <Route path='/coins/:id' element={<Coinpage/>}/>
      
      </Routes>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App
