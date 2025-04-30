import React from 'react'
import "./styles/speakers.css"
import speakerOne from "../assets/speakers-nft.jpg"

export default function Speakers() {
  const handleMouseOver = () => {

  }

  return (
    <div className="speakers-parent">
      {/* 🔗 Clickable iframe preview */}

      {/* </div> */}

      {/* 🎤 Speakers Section */}
      <div className="speaker-container">
        <div className="speaker-title">
          <h1 className="head_">Speakers</h1>
        </div>

        <div className="other-description">
          <div className="pics">
            <div className="images">
              {/* <div className="img"> */}
                <img onMouseOver={handleMouseOver} className="image-one" src={speakerOne} alt="Vlad Zamfir" />
                {/* <span>Elicom</span> */}
                {/* </div> */}
              <img className="image-one" src={speakerOne} alt="Vitalik Buterin" />
              <img className="image-one" src={speakerOne} alt="Ayana" />
              <img className="image-one" src={speakerOne} alt="Charles Hoskinson" />
              <img className="image-one" src={speakerOne} alt="Stani Kulechov" />
              <img className="image-one" src={speakerOne} alt="Kulea" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
