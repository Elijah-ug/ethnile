import React from 'react'
import "./styles/about.css"
import ImageA from "../assets/Imagea.jpeg"
import ImageB from "../assets/ImageB.jpeg"
export default function About() {
  return (
      <div className='about'>
          <div className="about-text">
              <h2 className='abt-heading'>About EthNile</h2>
              {/* <hr /> */}
              <div className="text-first">
                  <main>
                      EthNile is an In Person Web3 Conference and <br />
                      Hackathon at the ource of the Nile that will <br />
                      also involve side events in Kampala.

                  </main>

              </div>
          </div>
          {/* video-area */}
          <div className="main-grid">
              <div className="about-video">
                  {/* vid */}
                   <img src={ImageA} alt="image" />
                  {/* vid */}
              <div className="text-video">
              <h3 className='heading'>decentralising sub-sahara </h3>
                      <main>
                          Web3 is transforming the global landscape by providing decentralized
                          and private solutions at scale through blockchain technology.
                          Africa has already demonstrated its formidable potential in the Web3.0
                          innovation space. The EthNile Hackathon seeks to bring together emerging
                          talent in the Web3 space to create decentralized solutions tailored to
                          Africa's unique challenges and opportunities.
                         </main>
              </div>
          </div>
          {/* about-image */}
          <div className="about-image">
              <div className="img-text">
                  <h3 className='heading'>onchain, tokenised and african </h3>
                      <main>
                          At EthNile, we will dive into decentralized solutions from
                          Africa that are shaping the future. Is the future already here?
                          We’re driving the conversation on building solutions that will
                          bring the next million Africans onto the blockchain. Can Africa
                          fully embrace decentralization? What about the role of regulations?
                          And what’s the potential of tokenization? Let’s not forget AI.
                          </main>
              </div>
              <div className="img">
                  <img src={ImageB} alt="image" />
              </div>
              </div>
              </div>
    </div>
  )
}
