import React from 'react';
import '../css/Booking.css';
import FetchBookingDetail from '../components/FetchBookingDetail';

const BookingRequest = () => {
  const [listings, setListings] = React.useState([]);
  console.log(listings);
  const token = localStorage.token;
  // const email = localStorage.email;
  React.useEffect(() => {
    fetch('http://localhost:5005/bookings', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    })
      .then(r => r.json())
      .then(data => setListings(data.bookings));
  }, []);
  return <div className="booking_page">
      {listings.map((listing, idx) =>
        <FetchBookingDetail key={idx} name={listing.listingId} list={listing} bookingID={listing.id}/>
      )}
  </div>;
}

export default BookingRequest;
