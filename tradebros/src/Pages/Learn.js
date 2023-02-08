import React from 'react'
import './Learn.css'
import { useState } from 'react'
export default function Learn() {
    const [cards] = useState([
        {
            Title: 'card-1',
            img: 'ETF.jpeg',
            Text: 'Lorem ipsum dolor sit amet. Et similique animi sit eius sint et adipisci saepe cum unde sapiente ut minima totam. Ea quos tenetur et harum cupiditate eum dolore quia aut quis delectus 33 aliquid rerum ut tempora recusandae. Sed animi quisquam sed perferendis autem id voluptatem dignissimos aut quia aspernatur. Est omnis reprehenderit aut exercitationem beatae eum harum porro sed saepe perspiciatis.s'
        },
        {
            Title: 'card-2',
            img: 'ETF.jpeg',
            Text: 'Lorem ipsum dolor sit amet. Et similique animi sit eius sint et adipisci saepe cum unde sapiente ut minima totam. Ea quos tenetur et harum cupiditate eum dolore quia aut quis delectus 33 aliquid rerum ut tempora recusandae. Sed animi quisquam sed perferendis autem id voluptatem dignissimos aut quia aspernatur. Est omnis reprehenderit aut exercitationem beatae eum harum porro sed saepe perspiciatis.'
        },
        {
            Title: 'card-3',
            img: 'ETF.jpeg',
            Text: 'Lorem ipsum dolor sit amet. Et similique animi sit eius sint et adipisci saepe cum unde sapiente ut minima totam. Ea quos tenetur et harum cupiditate eum dolore quia aut quis delectus 33 aliquid rerum ut tempora recusandae. Sed animi quisquam sed perferendis autem id voluptatem dignissimos aut quia aspernatur. Est omnis reprehenderit aut exercitationem beatae eum harum porro sed saepe perspiciatis.'
        },
        {
            Title: 'card-4',
            img: 'ETF.jpeg',
            Text: 'Lorem ipsum dolor sit amet. Et similique animi sit eius sint et adipisci saepe cum unde sapiente ut minima totam. Ea quos tenetur et harum cupiditate eum dolore quia aut quis delectus 33 aliquid rerum ut tempora recusandae. Sed animi quisquam sed perferendis autem id voluptatem dignissimos aut quia aspernatur. Est omnis reprehenderit aut exercitationem beatae eum harum porro sed saepe perspiciatis.'
        },
        {
            Title: 'card-5',
            img: 'ETF.jpeg',
            Text: 'tLorem ipsum dolor sit amet. Et similique animi sit eius sint et adipisci saepe cum unde sapiente ut minima totam. Ea quos tenetur et harum cupiditate eum dolore quia aut quis delectus 33 aliquid rerum ut tempora recusandae. Sed animi quisquam sed perferendis autem id voluptatem dignissimos aut quia aspernatur. Est omnis reprehenderit aut exercitationem beatae eum harum porro sed saepe perspiciatis.'
        },
        {
            Title: 'card-6',
            img: 'ETF.jpeg',
            Text: 'Lorem ipsum dolor sit amet. Et similique animi sit eius sint et adipisci saepe cum unde sapiente ut minima totam. Ea quos tenetur et harum cupiditate eum dolore quia aut quis delectus 33 aliquid rerum ut tempora recusandae. Sed animi quisquam sed perferendis autem id voluptatem dignissimos aut quia aspernatur. Est omnis reprehenderit aut exercitationem beatae eum harum porro sed saepe perspiciatis.'
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

