import React from 'react'
import "./styles/footer.css"
import { ContactUs } from './ContactUs'
// import youtube from "../assets"

export default function Footer() {
    const xLogo = "https://cdn1.iconfinder.com/data/icons/social-links/80/_63-512.png"
    const youTubeLogo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2R2hfpqCb8SbS5dMYohtPYqnnJACrH20KTw&s"
    return (
      <div className="footer-container">
          <div className="upper-footer">
                <div className="about-us">
                    {/* form....****** */}
                  <h3>contact Us</h3>
                 <ContactUs/>
              </div>
              {/* <div className="links">
                  <h3>links</h3>
                  <a href="https://www.asseth.fr/"> Ethereum France</a>
              </div> */}
              <div className="connection">
                  <h3>socials</h3>
                  <div className="icon-media">
                  <a href="https://x.com/Ethnile_"><img src={xLogo} alt="" /> </a>
                        <a href="https://www.youtube.com/channel/UCf7zF8tFOb9T58nBo09BhAw">
                            <img src={youTubeLogo} alt="" />
                            </a>

                  </div>
                  </div>
          </div>
          <hr className='horizontal-row'/>
          <div className="lower-footer">
              <p>Copyright &copy; 2025 EthNile | template by Colorlib</p>

          </div>
    </div>
  )
}
