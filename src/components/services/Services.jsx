import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Designe</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Login page </p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Signin page </p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>UI/UX For Mobile App </p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Home page </p>
            </li>
          </ul>
        </article>
        {/* End of ui   8888  */}

        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Data Collection </p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Smart Web Applications Using AI Libraries </p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p> APIs (Application Programming Interfaces) </p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p> Visualization and Data Analysis </p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p> Data Security </p>
            </li>
          </ul>
        </article>
        {/* End of Web development  8888  */}
             
                
                 
        <article className="service">
          <div className="service_head">
            <h3>Mobile App Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Frontend mobile app development</p>
            </li>
          </ul>
        </article>
        {/* End of mobile app development  8888  */}
      </div>
    </section>
  )
}

export default services