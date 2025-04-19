import React from 'react'
import "./styles/footer.css"
import { FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
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
              <div className="connection">
                  <h3>socials</h3>
                  <div className="icon-media">
              <a className='img' href="https://x.com/Ethnile_"> <FaXTwitter /> </a>

              <a className='img' href="https://t.me/ETHNile/1"> <FaTelegram /> </a>

                  </div>
                  </div>
          </div>
          <hr className='horizontal-row'/>
          <div className="lower-footer">
              <p>Copyright &copy; 2025 EthNile</p>

          </div>
    </div>
  )
}
