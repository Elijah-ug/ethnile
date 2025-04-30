import React from 'react'
// import "./styles/home.css"
import "./styles/mediaQueries.css"
// import "./styles/change.css"
import image from "../assets/bg-eth.mp4"

import Timer from './Timer'
export default function Home() {
  const eventStartDate = new Date("2025-07-24T00:00:00");  // Start of event: July 24th
  const eventEndDate = new Date("2025-07-27T23:59:59");    // End of event: July 27th
  return (

    <div className="home-container-three">
      <video autoPlay loop muted playsInline  className="background-video" poster="/assets/ba-img.jpg">

        <source src="https://v3.cdnpk.net/videvo_files/video/free/2012-11/large_preview/MVI_1482.mp4?token=exp=1746023397~acl=/*~hmac=39f318479c196b10dc10ffd1450ab16a3ec4a49d8346d64c06b8a43f2ad784fa    " type="video/mp4" />

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
