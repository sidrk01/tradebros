import React, { Fragment } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../components/articles.css" 


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
    <div id="articles">
            <ul>
                {stocksData.map((stock) => {
                    return(
                        <ul>
                            <table>
                                <tr>
                                    <th className="ArticlesHeader">Category</th>
                                    <th className="ArticlesHeader">Headline</th>
                                    <th className="ArticlesHeader">Summary</th>
                                    <th className="ArticlesHeader">URL</th>
                                </tr>
                                <tr>
                                    <td className="ArticleData">{stock.category}</td>
                                    <td className="ArticleData">{stock.headline}</td>
                                    <td className="ArticleData">{stock.summary}</td>
                                    <td className="ArticleData"><a className="urls" href={stock.url}>{stock.url}</a></td>
                                    

                                </tr>
                            </table>
                        </ul>
                    )
                })}
            </ul>
    </div>
</Fragment>
  );
}
