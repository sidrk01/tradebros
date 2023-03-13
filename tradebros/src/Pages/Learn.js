import React from "react";
import "./Learn.css";
import { useState } from "react";
export default function Learn() {
  const [cards] = useState([
    {
      Title: "ETF Basics",
      img: "ETF.jpeg",
      Text: "What is an ETF and how do you choose one?",
      Description: "An ETF is a type of investment fund and exhcnage traded product, they are traded on stock exchange. Ultimately, investors choosing an ETF need to ask 3 questions: What exposure does this ETF have? How well does the ETF deliver this exposure? And how efficiently can I access the ETF? Look at the ETF's underlying index (benchmark) to determine the exposure you're getting.",
    },
    {
      Title: "Trading ETFs",
      img: "ETF.jpeg",
      Text: "How does leverage work in ETFs?", 
      Description: "Key Takeaways. A leveraged exchange-traded fund (ETF) uses financial derivatives and debt to amplify the returns of an underlying index. While a traditional ETF typically tracks the securities in its underlying index on a one-to-one basis, a leveraged ETF may aim for a 2:1 or 3:1 ratio.",
    },
    {
      Title: "Recurring Investment",
      img: "ETF.jpeg",
      Text: "A recurring investment is a tool for investors to make regular and automatic investments. With a recurring investment, investors choose what to invest in, how much, and how often they want to invest. Market orders are placed automatically according to the schedule.",
    },
    {
      Title: "New Feature Updates",
      img: "ETF.jpeg",
      Text: "Check the details of new feature updates.",
      Description: "There are new features including News, Watchlist and Stock performance. The news feature allows you to see the latest and greatest stock news to obtain potential investments. Watchlist allows you to log in and create a watch list of all the stocks you want to keep an eye on. The stock performance adds the ability to see the current stock performance that updates efficiently.",
    },
    {
      Title: "Portfolio",
      img: "ETF.jpeg",
      Text: "What is in a portfolio? How do you evaluate its performance?",
      Description: "Evaluating your investment portfolio is crucial to achieving your financial goals. Timely assessments and quality feedback from a trained expert can help you rebalance your portfolio according to changing life goals and events. In the end, the goal of portfolio evaluation is to build a perfect portfolio that helps you create wealth for the short, medium, and long term.  "
    },
    {
      Title: "Option Basics",
      img: "ETF.jpeg",
      Text: "CBOE tells you what is options and the very basics.",
      Description: "An option is a contract giving the buyer the right—but not the obligation—to buy (in the case of a call) or sell (in the case of a put) the underlying asset at a specific price on or before a certain date."
    },
  ]);
  return (
    <div>
      <div className="container">
        <div className="box">
          <h3 className="top1"> what is an</h3>
          <h3> investment?</h3>
          <p className="Sentence">
            {" "}
            An investment is an asset bought with the expectation that it will
            generate some future income or profit
          </p>
        </div>
        <div className="box">
          <h3 className="top1"> what is a</h3>
          <h3> stock?</h3>
          <p className="Sentence">
            {" "}
            A stock is a unit of ownership in a company.
          </p>
        </div>
        <div className="box">
          <h3 className="top1"> what is the</h3>
          <h3> stock market?</h3>
          <p className="Sentence">
            {" "}
            The stock market is where buyers and sellers come together to trade
            shares in eligible companies
          </p>
        </div>
      </div>
      <section>
        <div className="course">
          <h1> Popular Learning Questions</h1>
          <div className="cards">
            {cards.map((card, i) => (
              <div key={i} className="card">
                <h3> {card.Title}</h3>
                {/* <img src= {card.img}/> */}
                <p> {card.Text}</p>
                <p> {card.Description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
