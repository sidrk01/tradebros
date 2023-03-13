import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import "./market.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const key = "bv1uf4v48v6o5ed6h88g";
const BASE_URL = "https://finnhub.io/api/v1/quote?symbol=";
const KEY_URL = `&token=${key}`;

let tempStocksData = [];

export default function Market() {
  const [stocksData, setStocksData] = useState([]);
  const [myStocks, setMyStocks] = useState([]);

  const getStocksData = (stock) => {
    return axios.get(`${BASE_URL}${stock}${KEY_URL}`).catch((error) => {
      console.error("Error", error.message);
    });
  };

  {/* There may be a bug in this function where we populate the array each time we click link */ }
  useEffect(() => {
    const stocksList = ["SPY", "QQQ", "IWM", "DIA", "TLT", "GLD", "USO"];
    tempStocksData = []
    let promises = [];
    stocksList.forEach((stock) => {
      promises.push(
        getStocksData(stock).then((res) => {
          tempStocksData.splice(6);
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
  }, []);

  return (
    <Fragment>
      <div className="market-container">
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
              {stocksData.map((stock) => {
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
                          {stock.dp.toFixed(2)}% <ArrowUpwardIcon className="green-icon"></ArrowUpwardIcon>
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
