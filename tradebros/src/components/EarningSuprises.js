import React, { Fragment } from "react";
import axios from "axios";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
export default function EarningSuprises(){


const key = "bv1uf4v48v6o5ed6h88g";
const EARNING_URL = "https://finnhub.io/api/v1/stock/earnings?symbol=TSLA";
const KEY_URL = `&token=${key}`;
const[earningSupriseData, setEarningSupriseData] = useState([]);
const[updatedEarningSupriseData, setUpdatedEarningSupriseData] = useState([]);

useEffect(() => {
    axios.get(`${EARNING_URL}${KEY_URL}`).then(res=> {
        console.log(res)
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

        <ul>
          {earningSupriseData.map((stock) => {
            return (
              <ul className="aritcles-list">
                
                    <li className="category"> 
                    <h3> Actual</h3>
                    {stock.actual} </li>
                    <li className="headline"> 
                    <h3> estimate</h3>{stock.estimate} </li>
                    <li className="paragraph">
                    <h3> period</h3> {stock.period} </li>
                    <li className="suprise"> 
                    <h3> suprise</h3>
                    {stock.surprise}</li>
              </ul>
            );
          })}
        </ul>
    );
}