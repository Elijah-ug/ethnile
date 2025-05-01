import React from 'react'
import "./styles/about.css"
import ImageA from "../assets/eth2.jpg"
import ImageB from "../assets/ethN.JPG"
import BgImage from "../assets/about-bg.jpg"; // replace with your image file

export default function About() {
  return (
      <div className='about'  >
          <div className="about-text">
              <h2 className='abt-heading'>About EthNile</h2>
              {/* <hr /> */}
              <div className="text-first">
                  <main>
                      EthNile is an in-person Web3 conference and hackathon hosted at the source of the River Nile, featuring pop-up pitch days, intensive bootcamps, and guided campus and city tours.  <br />
                  </main>

              </div>
          </div>
          {/* video-area */}
          <div className="main-grid">
              <div className="about-video">
                  {/* vid */}
                  <div className="img-b">
                      <img src={ImageA} alt="image" />
                      </div>
                  {/* vid */}
              <div className="text-video">
              <h3 className='heading'>decentralising sub-sahara </h3>
                      <main>
                          EthNile 2025 is a Web3 hackathon and conference,
                          hosted in Jinja, Uganda. It unites developers, educators,
                          and innovators to explore decentralised solutions for real-world challenges.
                          Through workshops, mentorship, pitch, demo days and hybrid hackathon experiences,
                          EthNile empowers the next generation of African blockchain builders and fosters global collaboration.
                         </main>
              </div>
          </div>
          {/* about-image */}
          <div className="about-image">
              <div className="img-text">
                  <h3 className='heading'>Code of the Continent: Africa’s Decentralized Leap</h3>
                      <main>
                          Can Africa fully embrace decentralization?
                           How will regulation shape or support this future?
                           What role will tokenization play in real-world use cases?
                           How does AI fit into the Web3 revolution?
                           Join the builders, thinkers, and pioneers leading this conversation—and help write Africa’s decentralized future.



                          </main>
              </div>
              <div className="img-a">
                  <img src={ImageB} alt="image" />
              </div>
              </div>
              </div>
    </div>
  )
}
