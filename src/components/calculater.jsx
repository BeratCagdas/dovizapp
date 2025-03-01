import React, { useState } from 'react'
import './calculater.css'
import 'axios'
import axios from 'axios';
let BASE_URL = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_IpNzrbvfb5mI6Z82IIMoAHyP3kddkRPK5OmigYF1&"
function Calculater() {
        
    const [amount , setamount]  = useState();
    const [from , setfrom] = useState('USD');
    const [to , setto] = useState('TRY');
    const [result , setresult] = useState();
   
    const runevent = async() =>{
      const response = await axios.get(`${BASE_URL}base_currency=${from}`);
        const total = ((response.data.data[to]) * amount).toFixed(2);
        setresult(total); 
    }
   
  return (
    <div className='container'>
        <div className='maindiv'>
          <div className='header'>
            <h4>DÖVİZ KURU UYGULAMASI</h4>
          </div>
          <div className='box'>
        <input type='number' className='amount' value={amount} onChange={(e) => setamount(e.target.value)}></input>
        <select value={from} onChange={(e) => setfrom(e.target.value)}>
            <option>TRY</option>
            <option>USD</option>
            <option>EUR</option>
        </select>
        <select value={to} onChange={(e) => setto(e.target.value)} >
            <option>USD</option>
            <option>TRY</option>
            <option>EUR</option>
        </select>
        <input type='number' className='result' value={result} onChange={(e) => setresult(e.target.value)}></input>
        </div>
        <div>
          <button className='calculate' onClick={runevent}>HESAPLA</button>
          </div>
        </div>      
    </div>

  )
}

export default Calculater