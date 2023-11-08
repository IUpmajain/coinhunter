//for search page

import React from 'react'
import { Link } from 'react-router-dom'

const CardItem = ({coin}) => {
  return (
    <>
     <div className="card m-2" style={{width: "15rem"}}>
  <div className="card-body text-center">
    <img src={coin.large} alt={coin.name} height={50}/>
    <h6 className="card-subtitle mb-2 text-body-secondary">{coin.name}</h6>
    <h6 className="card-subtitle mb-2 text-body-secondary">{coin.symbol}</h6>
    <h6 className="card-subtitle mb-2 text-body-secondary"> Market_Cap_Rank:&nbsp;{coin.market_cap_rank}</h6>
    <Link to={`/coin/${coin.id}`}  className=" btn btn-primary">Get More Info</Link>
  </div>
</div> 
    </>
  )
}

export default CardItem;
