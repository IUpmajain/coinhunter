// //home page

import React, { useContext, useEffect } from 'react'
import CoinContext from '../context/CoinContext'
import { coinList } from '../context/CoinAction'
import Card from './Card'

const Carousel = () => {

  const {allData, dispatch} = useContext(CoinContext)

  const getData = async()=>{
    const data = await coinList();
    dispatch({
      type:"GET_ALLCOIN",
      payload:data,
    });
  };

  useEffect(()=>{
    getData();
  }, [])

  return (
    <>
      <div className='container-fluid'>
       <h4 className='fs-3 fw-bold text-danger m-3'>Coinlist by Market_Cap</h4>
       <div className="container-fluid mt-3">
       <table className="table">
     <thead>
       <tr className='text-right d-flex justify-content-between'>
         <th scope="col" className='fs-5 fw-bold bg-primary text-white rounded-pill p-1'>Coin Name</th>
         <th scope="col" className='fs-5 fw-bold bg-primary text-white rounded-pill p-1'>Price</th>
         <th scope="col" className='fs-5 fw-bold bg-primary text-white rounded-pill p-1'>24h Change</th>
         <th scope="col" className='fs-5 fw-bold bg-primary text-white rounded-pill p-1'>Market Cap</th>
       </tr>
     </thead>
     </table>
         {allData.map((product)=>(
            <Card key={product.id} product={product}/>
        ))}
      </div>
    </div> 
    </>
  )
}

export default Carousel
