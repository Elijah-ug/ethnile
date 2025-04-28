import React from 'react';
import Countdown from 'react-countdown'; // Import the Countdown component from the react-countdown library
// import './HomePage.css'; // Import the CSS file for styling

const Timer = () => {
  // Define the event start and end dates
  const eventStartDate = new Date("2025-07-24T00:00:00");  // Start of event: July 24th
  const eventEndDate = new Date("2025-07-27T23:59:59");    // End of event: July 27th

  return (
    <div className="home-wrapper">
           <div className="content">

        {/* Countdown to the start of the event */}
        <h2>Until Event Starts</h2>
        <Countdown date={eventStartDate} renderer={renderer} />

        {/* Countdown to the end of the event */}
        {/* <h2>Until Event Ends</h2>
        <Countdown date={eventEndDate} renderer={renderer} /> */}
      </div>
    </div>
  );
};

// Custom renderer function to display the countdown
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  // If the countdown is completed (after the event ends), display the message
  if (completed) {
    return <div>Event is ongoing!</div>;  // If completed (after the event ends)
  } else {
    // Otherwise, display the countdown in days, hours, minutes, and seconds
    return (
      <div className="countdown-timer">
            <div className="time-block">
            <p className="time-label">Days</p>
            <p className="time-number">{days}</p> {/* Display days */}
        </div>
            <div className="time-block">
                <p className="time-label">Hours</p>   {/* Label for "Hours" */}
                <p className="time-number">{hours}</p> {/* Display hours */}
        </div>
            <div className="time-block">
                <p className="time-label">Minutes</p>  {/* Label for "Minutes" */}
                <p className="time-number">{minutes}</p> {/* Display minutes */}
        </div>
            <div className="time-block">
                <p className="time-label">Seconds</p>  {/* Label for "Seconds" */}
                <p className="time-number">{seconds}</p> {/* Display seconds */}
        </div>
      </div>
    );
  }
};

export default Timer;
