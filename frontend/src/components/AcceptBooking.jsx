import React from 'react';
import '../css/Buttons.css';
const AcceptBooking = (props) => {
  // eslint-disable-next-line react/prop-types
  const id = props.name;
  const url = 'http://localhost:5005/bookings/accept/' + id;
  const token = localStorage.token;
  const acceptbooking = () => {
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
          alert('accept fails');
          return;
        }
        alert('accept successfully');
        window.location.href = '/listing/bookingRequest';
      });
  };
  return <>
        <button className="booking_btn" onClick={acceptbooking}>Accept</button>
    </>;
}

export default AcceptBooking;
