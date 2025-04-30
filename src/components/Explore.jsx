import React from 'react';
import "./styles/explore.css"
const Explore = () => {
  return (
    <div className="parent" >
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
    </div>
  );
}

export default Explore;
