import React from 'react';
import '../css/Buttons.css';

const Review = (props) => {
  // eslint-disable-next-line react/prop-types
  const Listid = props.listingid;
  // eslint-disable-next-line react/prop-types
  const bookid = props.bookingid;
  console.log(bookid)
  const token = localStorage.token;
  const [reviews, setReviews] = React.useState('');
  const [score, setScore] = React.useState(0);
  const reviewFunction = () => {
    if (!token) {
      window.location.href = '/common/login';
      return;
    }
    if (!bookid) {
      alert('please book firstly')
      return;
    }
    if (isNaN(score)) {
      alert('score should be a number!');
      return;
    }
    if (score > 10 || score < 0) {
      alert('score should between 0 and 10 !')
      return;
    }
    if (score > 10 || score < 0) {
      alert('score should between 0 and 10 !')
      return;
    }
    const url = 'http://localhost:5005/listings/' + Listid + '/review/' + bookid;
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify({
        review: {
          reviews: reviews,
          score: score,
        },
      }),
    })
      .then(r => {
        if (r.status === 400) {
          r.text().then((data) => {
            alert('review fails');
            console.log(data);
          }
          )
        } else if (r.status === 403) {
          r.text().then((data) => {
            alert('review fails');
            console.log(data);
          }
          )
        } else {
          // console.log(data.bookingId);
          alert('review successfully');
          window.location.href = ('/listing/detail/' + Listid);
        }
      }
      )
  };
  return <>
    Please Enter Reviews:<input type="text" value={reviews} onChange={ event => { setReviews(event.target.value) } }/><br/>
    Please Enter Score:<input type="number" value={score} onChange={ event => { setScore(event.target.value) } }/><br/>
        <button className="book_btn" onClick={reviewFunction}>Review</button> <br/>
    </>;
}

export default Review;
