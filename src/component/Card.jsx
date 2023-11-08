//for table ,first page

import React from 'react';
import { Link } from 'react-router-dom';


const Card = ({product}) => {

  return (
<table className="table">
    <tbody>
      <Link to={`/coin/${product.id}`}>
      <tr style={{display:'flex', justifyContent:"space-between"}}>
      <td className='d-flex'>
      <img src={product.image} alt={product.name} height={50}/>
      <div className='d-flex flex-column ms-2'>
        <span style={{transform:"uppercase"}}>
          {product.symbol}
        </span>
        <span>{product.name}</span>
      </div>
      </td>
        <td >${product.current_price}</td>
        <td style={{color:product.price_change_percentage_24h>0 ?"rgb(14, 203, 129)" : "red"}}>{product.price_change_percentage_24h.toFixed(4)}%</td>
        <td>{product.market_cap}M</td>
      </tr>
      </Link>
    </tbody>
    </table>
  )
}

export default Card
