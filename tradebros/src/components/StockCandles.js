import React, { Fragment } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function StockCandles() {
  const key = "bv1uf4v48v6o5ed6h88g";
  const BASE_URL = "https://finnhub.io/api/v1/stock/recommendation?symbol=AAPL";
  const KEY_URL = `&token=${key}`;

  const [stocksCandlesData, setStocksCandlesData] = useState([]);
  const [updatedStocksCandlesData, setUpdatedCandlesStockData] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}$${KEY_URL}`)
      .then((res) => {
        setStocksCandlesData(res.data);
        console.log(res)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

//   useEffect(() => {
//     if (stocksData.length > 9) {
//       stocksData.splice(0, 90);
//     }
//     setUpdatedStockData(stocksData);

//   });

  return (
    <Fragment>
        <h1>Articles</h1>
        <div className="containerArticles">
        <ul>
          {stocksCandlesData.map((stock) => {
            return (
              <ul className="aritcles-list">
                
                    
              </ul>
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
}
