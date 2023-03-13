import React, { Fragment } from "react";
import axios from "axios";
import './news.css';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Articles from "../components/Articles";
import EarningSuprises from "../components/EarningSuprises";
import StockCandles from "../components/StockCandles";
let temp = []



export default function News(){

const key = "bv1uf4v48v6o5ed6h88g";
const BASE_URL  = "https://finnhub.io/api/v1/news?category=general";
const EARNING_URL = "https://finnhub.io/api/v1/calendar/earnings?from=";
const KEY_URL = `&token=${key}`;

// const [stocksData, setStocksData] = useState([]);
// const [updatedStockData, setUpdatedStockData] = useState([])


//     useEffect(() => {
//         axios.get(`${BASE_URL}$${KEY_URL}`).then(res=> {
//             setStocksData(res.data)
//         })
//         .catch(err => {
//             console.log(err)
//         })
//     }, [])

//     useEffect(() => {
//         if(stocksData.length > 9) {
//             stocksData.splice(0,90)
//         } 
//         setUpdatedStockData(stocksData)
//     })



    return(
        <Fragment>
             <div className="containerNews">
                <Fragment> 
                <div id= "eps">  
                  <EarningSuprises> </EarningSuprises>
                </div> 
               
                </Fragment>
              

                <Fragment>
                    <div id="articles">
                        <Articles> </Articles>
                            {/* <ul>
                                {stocksData.map((stock) => {
                                    return(
                                        <ul>
                                            <table>
                                                <tr>
                                                    <th>Category</th>
                                                    <th>Headline</th>
                                                    <th>Summary</th>
                                                    <th>URL</th>
                                                </tr>
                                                <tr>
                                                    <td>{stock.category}</td>
                                                    <td>{stock.headline}</td>
                                                    <td>{stock.summary}</td>
                                                    <td><a href={stock.url}>{stock.url}</a></td>
                                                    

                                                </tr>
                                            </table>
                                        </ul>
                                    )
                                })}
                            </ul> */}
                    </div>
                </Fragment>
            </div>
        </Fragment>
    );
}