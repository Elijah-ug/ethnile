import React from 'react'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import Speakers from './Speakers'
import Sponsors from './Sponsors'
import Header from './Header'
import Navbar from './Navbar'

export default function Container() {
  return (
    <div>
      <Navbar/>
      {/* <Header/> */}
          <Home />
          <About />
          <Speakers />
          <Sponsors/>
          <Footer/>
    </div>
  )
}
