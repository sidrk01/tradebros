import React, { Fragment } from "react";
import axios from "axios";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "../components/ipocalender.css"

export default function IPOCalender(){


    const key = "bv1uf4v48v6o5ed6h88g";
    const IPO_URL = "https://finnhub.io/api/v1/calendar/ipo?from=2023-01-01&to=2023-04-30";
    const KEY_URL = `&token=${key}`;
    
    const [earningIPOData, setEarningIPOData] = useState([]);
    const [EarningUpdatedCalenderData, setEarningUpdatedCalenderData] = useState([])
    
    
    
    useEffect(() => {
        axios.get(`${IPO_URL}${KEY_URL}`).then(res=> {
            console.log(res.data)
            setEarningIPOData(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    
 
        return(
            <Fragment>
                <div>
                    <h1> IPO</h1>
                </div>

                <ul>
                    {earningIPOData.map((stock) => {
                        return(
                            <li key={stock.date}>

                            </li>
                        )
                    })}
                </ul>
            </Fragment>
        );
    }