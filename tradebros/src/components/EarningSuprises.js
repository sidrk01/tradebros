import React, { Fragment } from "react";
import axios from "axios";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../components/earningSuprises.css';
export default function EarningSuprises(){


const key = "bv1uf4v48v6o5ed6h88g";
const EARNING_URL = "https://finnhub.io/api/v1/stock/earnings?symbol=TSLA";
const KEY_URL = `&token=${key}`;
const[earningSupriseData, setEarningSupriseData] = useState([]);
const[updatedEarningSupriseData, setUpdatedEarningSupriseData] = useState([]);

useEffect(() => {
    axios.get(`${EARNING_URL}${KEY_URL}`).then(res=> {
        setEarningSupriseData(res.data)
    })
    .catch(err=>{
        console.log(err)
    })
}, [])
useEffect(() => {
    if (earningSupriseData.length > 4) {
        earningSupriseData.splice(0, 4);
    }
    setUpdatedEarningSupriseData(earningSupriseData);
  });

    return(
<Fragment> 
      <h1> Earning Suprise Data </h1>
        <ul>
          {earningSupriseData.map((stock) => {
        return(
          <ul>
              <table>
                  <tr>
                      <th>Symbol</th>
                      <th>Period</th>
                      <th>Actual</th>
                      <th>Estiamte</th>
                  </tr>
                  <tr>
                      <td>{stock.symbol}</td>
                      <td>{stock.period}</td>
                      <td>{stock.actual}</td>
                      <td>{stock.estimate}</td>                      

                  </tr>
              </table>
          </ul>
      )
  })}
        </ul>
        </Fragment>
    );
}