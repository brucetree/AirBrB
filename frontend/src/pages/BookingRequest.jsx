import React from 'react';
import '../css/ListingList.css';
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
  return <div className="listing_list_page">
      {listings.map((listing, idx) =>
      // eslint-disable-next-line react/jsx-key
        <FetchBookingDetail name={listing.listingId} list={listing} bookingID={listing.id}/>
        // if (localStorage.email === listing.owner) {
        //   return (
        //           <FetchDetail name={listing.id}/>
        //   );
        // } else {
        //   return (<></>);
        // }
      )}
  </div>;
}

export default BookingRequest;
