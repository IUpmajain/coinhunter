import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CoinProvider } from './context/CoinContext';
import Navbar from './component/Navbar';
import Home from './Pages/Home';
import CoinPage from './Pages/CoinPage';


const App = () => {
  return (

    <Router>
      <CoinProvider>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      {/* <Route path='/searchpage' element={}/> */}
        <Route path='/coin/:coinid' element={<CoinPage/>}/>
      </Routes>
      </CoinProvider>
    </Router>
    
  )
}

export default App;
