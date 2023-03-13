import React, { Fragment } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import articles from "../components/articles.css" 


export default function Articles() {
  const key = "bv1uf4v48v6o5ed6h88g";
  const BASE_URL = "https://finnhub.io/api/v1/news?category=general";
  const KEY_URL = `&token=${key}`;

  const [stocksData, setStocksData] = useState([]);
  const [updatedStockData, setUpdatedStockData] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}$${KEY_URL}`)
      .then((res) => {
        setStocksData(res.data);
        // console.log(res)
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);

  useEffect(() => {
    if (stocksData.length > 9) {
      stocksData.splice(0, 90);
    }
    setUpdatedStockData(stocksData);

  });

  return (
    <Fragment>
        <h1>Articles</h1>
        <div className="containerArticles">
        <ul>
          {stocksData.map((stock) => {
            return (
              <div className="aritcles-list">
                
                    <p className="category"> {stock.category} </p>
                    <li className="headline"> {stock.headline} </li>
                    <li className="paragraph"> {stock.summary} </li>
              </div>
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
}
