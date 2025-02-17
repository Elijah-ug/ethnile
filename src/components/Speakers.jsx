import React from 'react'
import "./styles/speakers.css"
export default function Speakers() {
    const speakerImageOne = "https://vincentlg.github.io/images/vlad_zamfir.jpg"
    const speakerImageTwo = "https://vincentlg.github.io/images/vlad_zamfir.jpg"
    const speakerImageThree = "https://vincentlg.github.io/images/vlad_zamfir.jpg"
    const speakerImageFour = "https://vincentlg.github.io/images/vlad_zamfir.jpg"
    const speakerImageFive = "https://vincentlg.github.io/images/vlad_zamfir.jpg"
    const speakerImageSix = "https://vincentlg.github.io/images/vlad_zamfir.jpg"
  return (
      <div className="speaker-container">
          <div className="speaker-title">
              <h1 className='head_'>Speakers</h1>
          </div>

          <div className="other-description">
              {/* <h3 className='description-head'>apply to speak</h3> */}
              <button className='apply'>apply to speak</button>
              <p>Applications to be speaker will open soon</p>

              <h3 className='description-head'>Notable Speakers</h3>
                  <p className="coming-soon">comming soon!</p>
              <div className="pics">
                  <div className="images">
                  {/* <img className='image-one' src={speakerImageOne} alt="speakerImageOne" />
                  <img className='image-one' src={speakerImageOne} alt="speakerImageOne" />
                  <img className='image-one' src={speakerImageOne} alt="speakerImageOne" />
                  <img className='image-one' src={speakerImageOne} alt="speakerImageOne" />
                  <img className='image-one' src={speakerImageOne} alt="speakerImageOne" />
                  <img className='image-one' src={speakerImageOne} alt="speakerImageOne" /> */}

                      </div>
              </div>
          </div>
    </div>
  )
}
