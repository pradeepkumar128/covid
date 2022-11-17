import React, { useEffect, useState } from 'react';
import './covid.css';

const Covid = () => {
     const [data,setData] = useState([]);
     const  getCovidData = async ()=> {
          try {
               const res =  await fetch('https://data.covid19india.org/data.json');
               const actualData = await res.json();
               console.log(actualData.statewise[0]);
               setData(actualData.statewise[0]);
          }catch(err){
               console.log(err);
          }
     
     }


     useEffect(()=> {
          getCovidData();
     },[]);
  return (
  <>
<section>
     <div className='icon'><h1 className="live"><div className='circle'> </div>Live Update </h1></div>
     <ul>
          <li className="card">
               <div className="card_main">
                    <div className="card_inner">
                         <p className="card_name"><span>OUR</span>COUNTRY</p>
                         <p className="card_total">INDIA</p>
                    </div>
               </div>
          </li>

          <li className="card">
               <div className="card_main">
                    <div className="card_inner">
                         <p className="card_name"><span>TOTAL</span>RECOVERED</p>
                         <p className="card_total card_small">{data.recovered}</p>
                    </div>
               </div>
          </li>

          <li className="card">
               <div className="card_main">
                    <div className="card_inner">
                         <p className="card_name"><span>TOTAL</span>CONFIRMED</p>
                         <p className="card_total card_small">{data.confirmed}</p>
                    </div>
               </div>
          </li>
<br/>
          <li className="card">
               <div className="card_main">
                    <div className="card_inner">
                         <p className="card_name"><span>TOTAL</span>DEATH</p>
                         <p className="card_total card_small">{data.deaths}</p>
                    </div>
               </div>
          </li>

          <li className="card">
               <div className="card_main">
                    <div className="card_inner">
                         <p className="card_name"><span>TOTAL</span>ACTIVE</p>
                         <p className="card_total card_small">{data.active}</p>
                    </div>
               </div>
          </li>

          <li className="card">
               <div className="card_main">
                    <div className="card_inner">
                         <p className="card_name"><span>LAST</span>UPDATE</p>
                         <p className="card_total card_small">{data.lastupdatedtime}</p>
                    </div>
               </div>
          </li>
     </ul>
</section>
  </>
  )
}

export default Covid;