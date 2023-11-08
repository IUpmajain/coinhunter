//search page


import React, { useContext } from 'react'
import CardItem from './CardItem'
import CoinContext from '../context/CoinContext'

const Carccontainer = () => {
    const {coins} = useContext(CoinContext)
    
  return (
    <div className='d-flex flex-wrap justify-content-between m-2'>
             {coins.map((coin)=>(
            <CardItem key={coin.id} coin={coin}/>
        ))}
    </div>
  )
}

export default Carccontainer;
