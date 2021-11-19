import React from 'react';
import AcceptBooking from './AcceptBooking';
import DeclineBooking from './DeclineBooking';
import PropTypes from 'prop-types';
import '../css/Booking.css';
const FetchBookingDetail = (props) => {
  const id = props.name;
  const bookingList = props.list;
  const bookingid = props.bookingID;
  const email = localStorage.email;
  const [owner, setOwner] = React.useState('');
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
  if (email !== owner) {
    return <></>;
  }
  if (email === owner && props.list.status === 'pending') {
    symbol = (<>BookingId:{bookingid}<br/>
      Title:{title}<br/>
      Booking Status:{bookingList.status}<br/>
      <AcceptBooking name={bookingid}/>
      <DeclineBooking name={bookingid}/>
    </>);
  } else {
    symbol = (<>BookingId:{bookingid}<br/>
      Title:{title}<br/>
      Booking Status:{bookingList.status}<br/>
    </>);
  }
  return <div className='booking_card'>
    {symbol}
  </div>
}

FetchBookingDetail.propTypes = {
  name: PropTypes.string,
  bookingID: PropTypes.string,
  list: PropTypes.array,
}

export default FetchBookingDetail;
