import React from 'react';
import '../css/Buttons.css';
import PropTypes from 'prop-types';
const DeclineBooking = (props) => {
  const id = props.name;
  const url = 'http://localhost:5005/bookings/decline/' + id;
  const token = localStorage.token;
  const declinebooking = () => {
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    })
      .then(r => r.json())
      .then(data => {
        if (data.error) {
          alert('decline fails');
          return;
        }
        alert('decline successfully');
        window.location.href = '/listing/bookingRequest';
      });
  };
  return <>
        <button className="booking_btn" onClick={declinebooking}>Decline</button>
    </>;
}
DeclineBooking.propTypes = {
  name: PropTypes.string,
}

export default DeclineBooking;
