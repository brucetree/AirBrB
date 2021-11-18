import React from 'react';
import '../css/Buttons.css';
import '../css/Booking.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useParams } from 'react-router-dom';
const ListingPublish = () => {
  const params = useParams();
  const [dateRange, setDateRange] = React.useState([null, null]);
  const [startDate, endDate] = dateRange;
  console.log(startDate, endDate);
  // eslint-disable-next-line react/prop-types
  const id = params.listingId;
  const url = 'http://localhost:5005/listings/publish/' + id;
  const token = localStorage.token;
  const publishListing = () => {
    if (!startDate) {
      alert('startdate can not be null!');
      return;
    }
    if (!endDate) {
      alert('enddate can not be null!');
      return;
    }
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify({
        availability: [
          {
            start_date: startDate,
            end_date: endDate,
          }
        ],
      })
    })
      .then(r => r.json())
      .then(data => {
        if (data.error) {
          alert('publish fails');
          return;
        }
        console.log(data);
        alert('publish successfully');
        window.location.href = '/listings';
      });
  };
  const backbutton = () => {
    window.location.href = '/listings';
  };
  return <div className='booking_page center'>
    select dates: <br/>
    <DatePicker
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => {
          setDateRange(update);
        }}
        isClearable={true}
    />
        <button className="booking_btn" onClick={publishListing}>Publish</button>
    <button className="booking_btn" onClick={backbutton}>Back</button>
    </div>;
}

export default ListingPublish;
