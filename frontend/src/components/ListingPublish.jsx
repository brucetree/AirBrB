import React from 'react';
import '../css/Buttons.css';
const ListingPublish = (props) => {
  // eslint-disable-next-line react/prop-types
  const id = props.name;
  const url = 'http://localhost:5005/listings/publish/' + id;
  const token = localStorage.token;
  const publishListing = () => {
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify({
        availability: [
          {
            start_date: '1',
            end_date: '2',
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
        window.location.href = '/listings';
      });
  };
  return <>
        <button className="btn100" onClick={publishListing}>Publish</button>
    </>;
}

export default ListingPublish;
