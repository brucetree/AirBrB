import React from 'react';
import '../css/Buttons.css';
const DeclineBooking = (props) => {
  // eslint-disable-next-line react/prop-types
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
        console.log(data);
        alert('decline successfully');
        // navigate('/listings', { replace: true });
        window.location.href = '/listing/bookingRequest';
      });
  };
  return <>
        <button className="btn100" onClick={declinebooking}>Decline</button>
    </>;
}

export default DeclineBooking;
