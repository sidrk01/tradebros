import React, { Fragment } from "react";
import axios from "axios";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../components/earningSuprises.css';
export default function EarningSuprises(){


const key = "bv1uf4v48v6o5ed6h88g";
const TSLA_URL = "https://finnhub.io/api/v1/stock/earnings?symbol=TSLA";
const AAPL_URL = "https://finnhub.io/api/v1/stock/earnings?symbol=TSLA";
const MSFT_URL = "https://finnhub.io/api/v1/stock/earnings?symbol=TSLA";

const KEY_URL = `&token=${key}`;
const[earningTSLASupriseData, setTSLAEarningSupriseData] = useState([]);
const[earningAAPLSupriseData, setAAPLEarningSupriseData] = useState([]);
const[earningMSFTSupriseData, setMSFTEarningSupriseData] = useState([]);

useEffect(() => {
    axios.get(`${TSLA_URL}${KEY_URL}`).then(res=> {
        setTSLAEarningSupriseData(res.data)
    })
    .catch(err=>{
        console.log(err)
    })
}, [])
useEffect(() => {
    axios.get(`${AAPL_URL}${KEY_URL}`).then(res=> {
        setAAPLEarningSupriseData(res.data)
    })
    .catch(err=>{
        console.log(err)
    })
}, [])
useEffect(() => {
    axios.get(`${MSFT_URL}${KEY_URL}`).then(res=> {
        setMSFTEarningSupriseData(res.data)
    })
    .catch(err=>{
        console.log(err)
    })
}, [])


    return(
<Fragment> 
      <h1> Earning Report </h1>
      <h2 className="EPSHeading"> TSLA Earning Report</h2>
        <ul>
          {earningTSLASupriseData.map((stock) => {
        return(
          <ul>
              <table>
                <thead>
                <tr>
                      <th>Period</th>
                      <th>Actual</th>
                      <th>Estimate</th>
                  </tr>
                </thead>
                <tbody> 
                  <tr>
                      <td>{stock.period}</td>
                      <td>{stock.actual}</td>
                      <td>{stock.estimate}</td>                      

                  </tr>
                </tbody>
              </table>
          </ul>
      )
  })}
        </ul>
        <h2 className="EPSHeading"> AAPL Earning Report</h2>
        <ul>
          {earningAAPLSupriseData.map((stock) => {
        return(
          <ul>
              <table>
                <thead>
                <tr>
                      <th>Period</th>
                      <th>Actual</th>
                      <th>Estimate</th>
                  </tr>
                </thead>
                <tbody> 
                  <tr>
                      <td>{stock.period}</td>
                      <td>{stock.actual}</td>
                      <td>{stock.estimate}</td>                      

                  </tr>
                </tbody>
              </table>
          </ul>
      )
  })}
    <h2 className="EPSHeading"> MSFT Earning Report</h2>
        </ul>
        <ul>
          {earningMSFTSupriseData.map((stock) => {
        return(
          <ul>
              <table>
                <thead>
                <tr>
                      <th>Period</th>
                      <th>Actual</th>
                      <th>Estimate</th>
                  </tr>
                </thead>
                <tbody> 
                  <tr>
                      <td>{stock.period}</td>
                      <td>{stock.actual}</td>
                      <td>{stock.estimate}</td>                      

                  </tr>
                </tbody>
              </table>
          </ul>
      )
  })}
        </ul>
        </Fragment>
    );
}