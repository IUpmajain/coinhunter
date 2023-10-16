import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { coinList } from '../features/coin/coinSlice';
import Card from './Card';
import {FaExclamationCircle} from "react-icons/fa"

const Carousel = () => {
    const dispatch = useDispatch();
    const {user, isLoading, isSuccess, isError} = useSelector((state)=>state.coin);

    useEffect(()=>{
        dispatch(coinList());
    },[]);


    if (isError) {
        return (
          <div>
            <h2 className="fs-3 fw-bold text-danger">
             <FaExclamationCircle/> Failed to load...
            </h2>
          </div>
        );
      }
    
      if (isLoading) {
        return (
          <div className="text-center">
            <div className="spinner-grow" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        );
      }

  return (
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
        {user.map((product)=>(
            <Card key={product.id} product={product}/>
        ))}
      </div>
    </div>
  )
}

export default Carousel;
