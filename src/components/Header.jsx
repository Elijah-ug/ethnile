import React from 'react'
import "./styles/header.css"
import "./styles/mediaQueries.css"
import EthNile3 from "../assets/changed.png"
import Navbar from './Navbar'
export default function Header() {
  return (
    <div className="nav">
      <div className='header-container'>
      {/* <h2 className='header-header'><a href="/"><span className='img-logo'><img src={EthNile3} alt="" /></span>  </a>  </h2> */}

      </div>
      <div className="navigation">
        <Navbar/>
      </div>
      </div>
  )
}
