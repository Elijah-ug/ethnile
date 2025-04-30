import React from 'react'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import Speakers from './Speakers'
import Sponsors from './Sponsors'
import Navbar from './Navbar'
import { Element } from 'react-scroll'
import { ContactUs } from './ContactUs'
import Explore from './Explore'

export default function Container() {
  return (
    <div>
      <Navbar />
      <Element name="home">
        <Home />
      </Element>

      <Element name="speakers">
        <About />
      </Element>
      <Element name="speakers">
        <Explore />
      </Element>

      <Element name="schedule">
        <Speakers />
      </Element>

      <Element name="register">
        <Footer />
      </Element>
          {/* <Home />
          <About />
          <Speakers />
          <Sponsors/>
          <Footer/> */}
    </div>
  )
}
