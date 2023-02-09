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
    return axios.get(`${BASE_URL}${stock}${KEY_URL}`).catch((error) => {
      console.error("Error", error.message);
    });
  };

  const handleClick = () => {
    //make temp list
    tempStocksData = []
    stocksList.push(inputRef.current.value);
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
      setStocksData(tempStocksData);
      console.log(tempStocksData);
    });
  };

//   const handleSearch = () => {
//     myStocks.filter((stock) => stock.name.toLowerCase().includes(search));
//   };

  return (
    <Fragment>
      <div className="market-container">
        <div className="searchbar-container">
            <input className="search" ref={inputRef} type="text" id="message" name="message"></input>
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
                    <li className="list-elements">{stock.name}</li>
                    <li className="list-elements">{stock.c.toFixed(2)}</li>
                    <li className="list-elements">{stock.h.toFixed(2)}</li>
                    <li className="list-elements">{stock.l.toFixed(2)}</li>

                    {stock.d.toFixed(2) < 0 ? (
                      <Fragment>
                        <li className="list-elements-red">
                          {stock.d.toFixed(2)}
                        </li>
                      </Fragment>
                    ) : (
                      <Fragment>
                        <li className="list-elements-green">
                          {stock.d.toFixed(2)}
                        </li>
                      </Fragment>
                    )}

                    {stock.dp.toFixed(2) < 0 ? (
                      <Fragment>
                        <li className="list-elements-red">
                          {stock.dp.toFixed(2)}%
                          <ArrowDownwardIcon className="red-icon"></ArrowDownwardIcon>
                        </li>
                      </Fragment>
                    ) : (
                      <Fragment>
                        <li className="list-elements-green">
                          {stock.dp.toFixed(2)}%{" "}
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
