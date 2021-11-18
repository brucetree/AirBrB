import React from 'react';
import Review from './Review';
const BookingOrnot = (props) => {
  // eslint-disable-next-line react/prop-types
  const id = props.listingid;
  const url = 'http://localhost:5005/bookings';
  const token = localStorage.token;
  const [listings, setListings] = React.useState([]);
  const [booked, setBooked] = React.useState(false);
  const [booingid, setBookingid] = React.useState('');
  React.useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    })
      .then(r => {
        if (r.status === 403) {
          r.text().then((data) => {
            console.log(data);
          }
          )
        } else {
          r.json().then((data) => {
            setListings(data.bookings);
            for (let i = 0; i < data.bookings.length; i++) {
              if (data.bookings[i].owner === localStorage.email && id === data.bookings[i].listingId) {
                setBooked(true);
                setBookingid(data.bookings[i].id);
                break;
              }
            }
          });
        }
      }
      )
  }, []);
  console.log(listings, booked);
  let symbol;
  if (booked === true) {
    symbol = (<><br/>
      <p>booked!</p>
      <Review listingid={id} bookingid={booingid}/>
      <br/>
    </>);
  } else {
    symbol = (<><br/><br/>You have not booked yet</>);
  }
  return <>
    {symbol}
    </>
}

export default BookingOrnot;
