import React from 'react'
import './Learn.css'
import { useState } from 'react'
export default function Learn() {
    const [cards] = useState([
        {
            Title: 'ETF Basics',
            img: 'ETF.jpeg',
            Text: 'What is an ETF and how do you choose one? Find the answer here.'
        },
        {
            Title: 'Trading ETFs',
            img: 'ETF.jpeg',
            Text: 'How does leverage work in ETFs? Click here to find the answer.'
        },
        {
            Title: 'Recurring Investment',
            img: 'ETF.jpeg',
            Text: 'Recurring investment is a tool for investors to make regular and automatic investments in stocks and ETFs.'
        },
        {
            Title: 'New Feature Updates',
            img: 'ETF.jpeg',
            Text: 'Check the details of new feature updates here.'
        },
        {
            Title: 'Portfolio',
            img: 'ETF.jpeg',
            Text: 'What is in a portfolio? How do you evaluate its performance? Find the answer here.'
        },
        {
            Title: 'Option Basics',
            img: 'ETF.jpeg',
            Text: 'CBOE tells you what is options and the very basics.'
        },
    ])
    return (
        
        <div>
            <header> 
                
            </header>
       <div className='container'>
        <div className='box'>
            <h3 className='top1'> what is an</h3>
            <h3> investment?</h3>
            <p className='Sentence'> An investment is an asset bought with the expectation that it will generate some future income or profit</p>
        </div>
        <div className='box'>
        <h3 className='top1'> what is a</h3>
            <h3> stock?</h3>
            <p className='Sentence'> A stock is a unit of ownership in a company.</p>
            
        </div>
        <div className='box'>
        <h3 className='top1'> what is the</h3>
            <h3> stock market?</h3>
            <p className='Sentence'> The stock market is where buyers and sellers come together to trade shares in eligible companies</p>
            
        </div>
       </div>
       <section>
        <div className='course'>
            <h1> Popular Learning Courses</h1>
            <div className='cards'>
                {
                    cards.map((card, i)=> (
                        <div key={i} className = 'card'>
                            <h3> {card.Title}
                            </h3>
                            {/* <img src= {card.img}/> */}
                            <p> {card.Text}</p>
                            </div>
                    ))
                }
            </div>
        </div>
       </section>
       
       
       </div>


    
    )
}

