import React from 'react'
import './portfolio.css'
import IMG from './../../assets/image1.png'
import IMG2 from './../../assets/img2.png'
import IMG3 from './../../assets/img3.jpg'
import IMG4 from './../../assets/img4.jpg'
import IMG5 from './../../assets/img5.jpg'
import IMG6 from './../../assets/img6.jpg'


const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container porfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG} alt="" />
          </div>
          <h3>Client portfolio  </h3>
          <div className="portfolio_item-cta">
          <a href=" https://khaledelzawi.github.io/client.github.io" className='btn' target='_blank'>Github</a>
          <a href=" https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Car Store  </h3>
          <div className="portfolio_item-cta">
          <a href=" https://github.com/KhaledElzawi/CarStore.github.io" className='btn' target='_blank'>Github</a>
          <a href=" https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3> Website for Ai image </h3>
          <div className="portfolio_item-cta">
          <a href=" https://github.com" className='btn' target='_blank'>Github</a>
          <a href=" https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Dashboard for clients </h3>
          <div className="portfolio_item-cta">
          <a href=" https://github.com" className='btn' target='_blank'>Github</a>
          <a href=" https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3> GPS </h3>
          <div className="portfolio_item-cta">
          <a href=" https://github.com" className='btn' target='_blank'>Github</a>
          <a href=" https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Dashboard for clients </h3>
          <div className="portfolio_item-cta">
          <a href=" https://github.com" className='btn' target='_blank'>Github</a>
          <a href=" https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default portfolio