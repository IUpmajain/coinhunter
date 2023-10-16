import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getCoinDetails } from '../context/CoinAction';
import CoinContext from '../context/CoinContext';
import Chartism from '../component/Chartism';

const CoinPage = () => {

  const {dispatch, coinData} = useContext(CoinContext)
  const params = useParams();
  

  const fetchcoindata = async()=>{
    const data = await getCoinDetails(params.coinid);
    dispatch({
      type: "COIN_DETAILS",
      payload: data,
    });
  }
  useEffect(()=>{
    fetchcoindata();
  },[]);

  if(!coinData){
    return(
      <div className="text-center">
      <div className="spinner-grow" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
    )
  }

  return (
    <div>
      <div className="d-flex   mt-3">
      <img src={coinData.image.large} alt={coinData.name} height={140} />
      <span>
      <h2 className='fw-bold d-flex'>${coinData.market_data.current_price.usd}<p className='fs-5 fw-normal'>(USD)</p></h2>
      <h2 className='fw-bold d-flex'> ₹{coinData.market_data.current_price.usd}<p className='fs-5 fw-normal'>(INR)</p></h2>
      </span>
      </div>
      <h4 className='text-center' style={{width:150}}>{coinData.name}</h4>
      <h5 className='text-center' style={{width:150}}>{coinData.symbol}</h5>

      <p className='para mt-5'>
        {coinData.description.en.split("\r\n\r\nBitcoin is designed")[0]}
      </p>
      <span>
      <h6 className='ms-2 mt-5'>market_cap_rank : {coinData.market_cap_rank}</h6>
      <span className='d-flex ms-2'>
        <h6>price_change_percentage_24h : </h6>
      <h6 style={{color:coinData.market_data.price_change_percentage_24h>0 ? "rgb(14, 203, 129)" : "red"}}>&nbsp; &nbsp;{coinData.market_data.price_change_percentage_24h}%</h6>
      </span>
      <span className='d-flex ms-2'>
        <h6>price_change_percentage_7d : </h6>
      <h6 style={{color:coinData.market_data.price_change_percentage_7d>0 ? "rgb(14, 203, 129)" : "red"}}>&nbsp; &nbsp;{coinData.market_data.price_change_percentage_7d}%</h6>
      </span>
      <span className='d-flex ms-2'>
        <h6>price_change_percentage_14d :</h6>
        <h6 style={{color:coinData.market_data.price_change_percentage_14d>0 ? "rgb(14, 203, 129)" : "red"}}>&nbsp; &nbsp; {coinData.market_data.price_change_percentage_14d}%</h6>
      </span>
      <span className="d-flex ms-2">
        <h6>price_change_percentage_30d :</h6>
        <h6 style={{color:coinData.market_data.price_change_percentage_30d>0 ? "rgb(14, 203, 129)" : "red"}}> &nbsp;&nbsp;    {coinData.market_data.price_change_percentage_30d}%</h6>
      </span>
      <span className="d-flex ms-2">
        <h6>price_change_percentage_1yr : </h6>
        <h6 style={{color:coinData.market_data.price_change_percentage_30d>0 ? "rgb(14, 203, 129)" : "red"}}> &nbsp;&nbsp;{coinData.market_data.price_change_percentage_1y}%</h6>
      </span>
      </span>

      <Chartism/>
      
    </div>
  )
}

export default CoinPage;