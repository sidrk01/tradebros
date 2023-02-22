import React, { useState, useEffect, Fragment, useRef } from "react";
import axios from "axios";
import "./watchlists.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";


const key1 = "bv1uf4v48v6o5ed6h88g";
const BASE_URL1 = "https://finnhub.io/api/v1/quote?symbol=";
const key1_URL = `&token=${key1}`;

let tempStocksData1 = [];
let stocksList1 = [];

export default function Watchlist() {
  const inputRef = useRef(null);
  const [stocksData, setStocksData] = useState([]);
  const [myStocks, setMyStocks] = useState([]);
//   const [search, setSearch] = useState("");

  const [message, setMessage] = useState("");
  const [updated, setUpdated] = useState(message);

  const getStocksData = (stock) => {
    let returnVal = axios.get(`${BASE_URL1}${stock}${key1_URL}`);
    console.log(returnVal)
    return returnVal
  };

  const handleClick = () => {
    //make temp list
    console.log("Entered Clicker")
    tempStocksData1 = [];
    let stockName = inputRef.current.value.toUpperCase();
    if(!stocksList1.includes(stockName)){
      stocksList1.push((stockName));
    }
    let promises = [];
    stocksList1.forEach((stock) => {
      promises.push(
        getStocksData(stock).then((res) => {
          tempStocksData1.push({
            name: stock,
            ...res.data,
          });
        })
      );
    });

    Promise.all(promises).then(() => {
      tempStocksData1 = tempStocksData1.filter((stock) => stock.dp !=null)
      setStocksData(tempStocksData1);
    });
  };
  const removeValue = () => {
    //make temp list
    console.log("Entered Clicker")
    tempStocksData1 = [];
    let stockName = inputRef.current.value.toUpperCase();

    var index = stocksList1.indexOf(stockName);
    if (index !== -1) {
      stocksList1.splice(index, 1);
    }

    let promises = [];
    stocksList1.forEach((stock) => {
      promises.push(
        getStocksData(stock).then((res) => {
          tempStocksData1.push({
            name: stock,
            ...res.data,
          });
        })
      );
    });

    Promise.all(promises).then(() => {
      tempStocksData1 = tempStocksData1.filter((stock) => stock.dp !=null)
      setStocksData(tempStocksData1);
    });
  };

  return (
    <Fragment>
      <div className="market-container">
        <div className="searchbar-container">
            <input className="search" ref={inputRef} type="text" id="message" name="message" placeholder="Search a ticker"></input>
            <button className="search-btn" onClick={handleClick}>Search</button>
            <button className="remove-btn" onClick={removeValue}>Remove</button>
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
              {tempStocksData1.map((stock) => {
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
