import React, { useContext, useEffect, useState } from 'react'
import CoinContext from '../context/CoinContext'
import { useParams } from 'react-router-dom';
import { getChartDetails } from '../context/CoinAction';
import { Line } from 'react-chartjs-2';
import { CategoryScale, Chart, Legend, LineElement, LinearScale, PointElement, Title, Tooltip } from 'chart.js/auto';
import SelectButton from './SelectButton';


Chart.register(
  CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend
)


const Chartism = () => {

  const {dispatch, coinChart} = useContext(CoinContext);
  const params = useParams();

  const [day, setDay] = useState(1)

  const fetchchartcoin = async()=>{
    const data = await getChartDetails(params.coinid, day);

    dispatch({
      type:"COIN_CHART",
      payload:data,
    });
  }

  useEffect(()=>{
    fetchchartcoin();
  },[]);

  if(!coinChart){
    return(
      <div className="text-center">
      <div className="spinner-grow" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
    )
  }

  const chartDays = [
    {
      label:"24 Hours",
      value:1,
    },
    {
      label:"30 Days",
      value:30,
    },

    {
      label:"3 Months",
      value:90,
    },

    {
      label:"1 year",
      value:365,
    },


  ]

  return (
    <div className='mt-4'>
      <Line data={{
        labels: coinChart.map((graph)=>{
          let date = new Date(graph[0]);
          let time = date.getHours()>12 ? `${date.getHours()-12}:${date.getMinutes()}PM` : `${date.getHours()}:${date.getMinutes}AM`;

          return day===1 ? time: date.toLocaleDateString();
        }),

        datasets : [
          {
            data: coinChart.map((graph)=>graph[1]),
            label:`Price(Past ${day}Days) in USD`,
            borderColor:"#EEBC1D"
          },
        ],
      }}
      options={{
        elements:{
          point:{
            radius:1,
          },
        },
      }}
      />

      <div  style={{display:"flex", marginTop:10, justifyContent:"space-around", width:"100%"}}>

      {chartDays.map((day)=>(
        <SelectButton  key={day.value} onClick={()=>setDay(day.value)} selected={day.value===day}>{day.label}</SelectButton>
      ))}
      </div>
    </div>
  )
}

export default Chartism;
