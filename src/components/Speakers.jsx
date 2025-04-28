import React from 'react'
import "./styles/speakers.css"

export default function Speakers() {
  const speakerImageOne = "https://vincentlg.github.io/images/vlad_zamfir.jpg";
  const speakerImageTwo = "https://vincentlg.github.io/images/vitalik_buterin.jpg";
  const speakerImageThree = "https://vincentlg.github.io/images/ayana.jpg";
  const speakerImageFour = "https://vincentlg.github.io/images/charles.jpg";
  const speakerImageFive = "https://vincentlg.github.io/images/stani.jpg";
  const speakerImageSix = "https://vincentlg.github.io/images/kulea.jpg";

  return (
    <div className="speakers-parent">
      {/* 🔗 Clickable iframe preview */}
      <div className="iframe-container">
        <div className="embed-preview-container"
          onClick={() => window.open('https://app.sola.day/event/ethnile', '_blank')}
        >
          <h2>FOLLOW THE EVENT</h2>
          <iframe
            src="https://app.sola.day/event/ethnile"
            title="EthNile Event"
            width="100%"
            height="400"
            style={{ border: 'none', pointerEvents: 'none' }}
          ></iframe>
              </div>
              {/* <div className="iframe-text"> */}
                  {/* <h1>Hello world</h1>
                  <p>More about EthNile here</p> */}
                  <div className="embed-preview-container"
          onClick={() => window.open('https://hackmd.io/h2MXuvbsT1S8p6ZjtAg9mA', '_blank')}
        >
          <h2>More about EthNile</h2>
          <iframe
            src="https://hackmd.io/h2MXuvbsT1S8p6ZjtAg9mA"
            title="EthNile Event"
            width="100%"
            height="400"
            style={{ border: 'none', pointerEvents: 'none' }}
          ></iframe>
              </div>

              </div>
      {/* </div> */}

      {/* 🎤 Speakers Section */}
      <div className="speaker-container">
        <div className="speaker-title">
          <h1 className="head_">Speakers</h1>
        </div>

        <div className="other-description">
          <div className="pics">
            <div className="images">
              <img className="image-one" src={speakerImageOne} alt="Vlad Zamfir" />
              <img className="image-one" src={speakerImageTwo} alt="Vitalik Buterin" />
              <img className="image-one" src={speakerImageThree} alt="Ayana" />
              <img className="image-one" src={speakerImageFour} alt="Charles Hoskinson" />
              <img className="image-one" src={speakerImageFive} alt="Stani Kulechov" />
              <img className="image-one" src={speakerImageSix} alt="Kulea" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
