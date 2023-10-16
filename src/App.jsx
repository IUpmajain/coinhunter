import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Searchpage from './pages/Searchpage';
import CoinPage from './pages/CoinPage';
import { CoinProvider } from './context/CoinContext';
import Navbar from './component/Navbar';


const App = () => {
  return (

    <Router>
      <CoinProvider>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/searchpage' element={<Searchpage/>}/>
        <Route path='/coin/:coinid' element={<CoinPage/>}/>
      </Routes>
      </CoinProvider>
    </Router>
    
  )
}

export default App;
