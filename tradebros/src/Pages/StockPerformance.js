import React, { useState, useEffect, Fragment, useRef } from "react";
import axios from "axios";
import "./stockPerformance.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";


const key = "bv1uf4v48v6o5ed6h88g";
const BASE_URL = "https://finnhub.io/api/v1/quote?symbol=";
const KEY_URL = `&token=${key}`;

let tempStocksData = [];
let stocksList = [];

export default function StockPerformance() {
  const inputRef = useRef(null);
  const [stocksData, setStocksData] = useState([]);
  const [myStocks, setMyStocks] = useState([]);
//   const [search, setSearch] = useState("");

  const [message, setMessage] = useState("");
  const [updated, setUpdated] = useState(message);

  const getStocksData = (stock) => {
    let returnVal = axios.get(`${BASE_URL}${stock}${KEY_URL}`);
    console.log(returnVal)
    return returnVal
  };

  const handleClick = () => {
    //make temp list
    console.log("Entered Clicker")
    tempStocksData = [];
    let stockName = inputRef.current.value
    stocksList.push((stockName).toUpperCase());
    if(stocksList.length >= 2){
      stocksList.splice(0,1);
    }
    console.log(stocksList)
    let promises = [];
    stocksList.forEach((stock) => {
      promises.push(
        getStocksData(stock).then((res) => {
          tempStocksData.push({
            name: stock,
            ...res.data,
          });
        })
      );
    });

    Promise.all(promises).then(() => {
      tempStocksData = tempStocksData.filter((stock) => stock.dp !=null)
      setStocksData(tempStocksData);
    });
  };

  return (
    <Fragment>
      <div className="market-container">
        <div className="searchbar-container">
            <input className="search" ref={inputRef} type="text" id="message" name="message" placeholder="Search a ticker"></input>
            <button className="search-btn" onClick={handleClick}>Search</button>
        </div>
        <div className="heading-container">
          <ul>
            <li className="heading">Ticker</li>
            <li className="heading">Closing Price</li>
            <li className="heading">High Price</li>
            <li className="heading">Low Price</li>
            <li className="heading">Daily Change</li>
            <li className="heading">Daily Change%</li>
          </ul>
        </div>

        <Fragment>
          <div className="element-container">
            <ul>
              {tempStocksData.map((stock) => {
                return (
                  <ul className="element-list">
                    <li className="list-elements">{stock?.name}</li>
                    <li className="list-elements">{stock?.c.toFixed(2)}</li>
                    <li className="list-elements">{stock?.h.toFixed(2)}</li>
                    <li className="list-elements">{stock?.l.toFixed(2)}</li>

                    {stock?.d.toFixed(2) < 0 ? (
                      <Fragment>
                        <li className="list-elements-red">
                          {stock?.d.toFixed(2)}
                        </li>
                      </Fragment>
                    ) : (
                      <Fragment>
                        <li className="list-elements-green">
                          {stock?.d.toFixed(2)}
                        </li>
                      </Fragment>
                    )}

                    {stock?.dp.toFixed(2) < 0 ? (
                      <Fragment>
                        <li className="list-elements-red">
                          {stock?.dp.toFixed(2)}%
                          <ArrowDownwardIcon className="red-icon"></ArrowDownwardIcon>
                        </li>
                      </Fragment>
                    ) : (
                      <Fragment>
                        <li className="list-elements-green">
                          {stock?.dp.toFixed(2)}%{" "}
                          <ArrowUpwardIcon className="green-icon"></ArrowUpwardIcon>
                        </li>
                      </Fragment>
                    )}
                  </ul>
                );
              })}
            </ul>
          </div>
        </Fragment>
      </div>
    </Fragment>
  );
}
