import React from 'react';
import '../css/Buttons.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import '../css/Detail.css';
const Booking = (props) => {
  // eslint-disable-next-line react/prop-types
  const id = props.name;
  const url = 'http://localhost:5005/bookings/new/' + id;
  const token = localStorage.token;
  // const [StartDate, setStartDate] = React.useState('');
  // const [EndDate, setEndDate] = React.useState('');
  const [totalPrice, settotalPrice] = React.useState(0);
  const [dateRange, setDateRange] = React.useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [dateNum, setDateNum] = React.useState(0)
  const setFormDateNum = (e) => {
    const startdate = moment(e[0]);
    const enddate = moment(e[1])
    setDateNum(enddate.diff(startdate, 'days'));
    console.log(dateNum);
    // console.log(props.availiable[0]);
    // eslint-disable-next-line react/prop-types
    settotalPrice(dateNum * Number(props.price));
    console.log(totalPrice);
  }
  const bookingFunction = () => {
    if (!token) {
      alert('please login before booking');
      window.location.href = '/common/login';
      return;
    }
    if (startDate === null) {
      alert('date can not be null');
      return;
    }
    if (endDate === null) {
      alert('date can not be null');
      return;
    }
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify({
        dateRange: {
          startdate: startDate,
          enddate: endDate,
        },
        // eslint-disable-next-line react/prop-types
        totalPrice: dateNum * props.price,
      }),
    })
      .then(r => {
        if (r.status === 400) {
          r.text().then((data) => {
            alert('booking fails');
            console.log(data);
          }
          )
        } else if (r.status === 403) {
          r.text().then((data) => {
            alert('booking fails');
            console.log(data);
          }
          )
        } else {
          // console.log(data.bookingId);
          alert('Booking successfully');
          window.location.href = './' + id;
        }
      }
      )
  };
  return <>Select Dates: <div className='detail_line'>
    <DatePicker
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => {
          setDateRange(update);
          setFormDateNum(update)
        }}
        isClearable={true}
    />
    </div>
        {/* StartDate:<input type="text" value={StartDate} onChange={ event => { setStartDate(event.target.value) } }/><br/> */}
        {/* EndDate:<input type="text" value={EndDate} onChange={ event => { setEndDate(event.target.value) } }/><br/> */}
    {/* eslint-disable-next-line react/prop-types */}
      <p>TotalPrice: {dateNum} X {props.price} = {dateNum * props.price}</p>
        <button className="book_btn" onClick={bookingFunction}>Booking</button>
        <p></p>
    </>;
}

export default Booking;
