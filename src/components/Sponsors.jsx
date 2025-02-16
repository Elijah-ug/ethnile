import React from 'react'
import "./styles/sponsors.css"
export default function Sponsors() {
  return (
      <div className='sponsors'>
          <div className="sponsors-title">
              <h1 className='title-one'>Sponsors</h1>
          </div>
          <div className="sponsor-content">
              <button className='button'><a href="#">contact us!</a></button>
              {/* ...link... */}
              <h3 className='content-head'>check our sponsor packages</h3>
          </div>
    </div>
  )
}
