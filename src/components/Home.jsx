import React from 'react'
import "./styles/home.css"
// import "./styles/mediaQueries.css"
// import "./styles/change.css"

import { MdOutlineArrowForward } from 'react-icons/md'
import { FaArrowRight } from 'react-icons/fa'
import Timer from './Timer'
export default function Home() {
  const eventStartDate = new Date("2025-07-24T00:00:00");  // Start of event: July 24th
  const eventEndDate = new Date("2025-07-27T23:59:59");    // End of event: July 27th
  return (

    <div className="home-container-three">
      <video autoPlay loop muted playsInline className="background-video">
  <source src="/assets/bg-eth.mp4" type="video/mp4" />
  Your browser does not support the video tag.
    </video>

          <div className="home-container-two">
          <h2 className='date'>July 24 - 27, 2025</h2>
          <span className='city-conference'>Building Local Value, Scaling Global Impact </span>
        <h3 className='french-word'>Happening in Jinja </h3>
        <div className="cont">
        <div id="timer" className="dates">

          </div>
        </div>
        <Timer/>




              </div>
      </div>
  )
}
