import React from 'react';
import AcceptBooking from './AcceptBooking';
import DeclineBooking from './DeclineBooking';
const FetchBookingDetail = (props) => {
  console.log('jinlaile');
  // eslint-disable-next-line react/prop-types
  const id = props.name;
  // eslint-disable-next-line react/prop-types
  const bookingList = props.list;
  // eslint-disable-next-line react/prop-types
  const bookingid = props.bookingID;
  const email = localStorage.email;
  console.log('email', email);
  const [owner, setOwner] = React.useState('');
  console.log('owner', owner);
  const [title, setTitle] = React.useState('');
  React.useEffect(() => {
    fetch('http://localhost:5005/listings/' + id)
      .then(r => r.json())
      .then(data => {
        setOwner(data.listing.owner);
        setTitle(data.listing.title);
      }
      );
  }, []);
  let symbol;
  if (email === owner) {
    symbol = (<>BookingId:{bookingid}<br/>
      Title:{title}<br/>
      {/* eslint-disable-next-line react/prop-types */}
      Booking Status:{bookingList.status}<br/>
      <AcceptBooking name={bookingid}/>
      <DeclineBooking name={bookingid}/>
      <br/>
      <br/><br/>
      <hr/>
    </>);
  } else {
    symbol = (<></>);
  }
  return <>
    {symbol}
  </>
}
export default FetchBookingDetail;
