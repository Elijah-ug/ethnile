import React from 'react'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import Speakers from './Speakers'
import Sponsors from './Sponsors'
import Header from './Header'

export default function Container() {
  return (
      <div>
          <Header/>
          <Home />
          <About />
          <Speakers />
          <Sponsors/>
          <Footer/>
    </div>
  )
}
