import React, { Fragment } from "react";
import axios from "axios";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./earningCalender.css"

export default function News(){

const key = "bv1uf4v48v6o5ed6h88g";
const EARNING_URL = "https://finnhub.io/api/v1/calendar/earnings?from=2023-02-25&to=2023-02-28";
const KEY_URL = `&token=${key}`;

const [earningCalenderData, setEarningCalenderData] = useState(null);
// const [EarningUpdatedCalenderData, setEarningUpdatedCalenderData] = useState([])



useEffect(() => {
    axios.get(`${EARNING_URL}$${KEY_URL}`).then(res=> {
        setEarningCalenderData(res.data)
    })
    .catch(err => {
        console.log(err)
    })
    console.log(earningCalenderData)
}, [])

    return(
        <div> 
            <h1> Earning Calender </h1>
            <u1>
               {earningCalenderData.map((stock) => {
                    return (
                        <li key={stock.date}>{stock.date}</li>
                    )
               })}
            </u1> 
        </div>
    );
}