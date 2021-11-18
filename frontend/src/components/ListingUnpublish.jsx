import React from 'react';
import '../css/Buttons.css';
const ListingUnpublish = (props) => {
  // eslint-disable-next-line react/prop-types
  const id = props.name;
  const url = 'http://localhost:5005/listings/unpublish/' + id;
  const token = localStorage.token;
  const unpublishListing = () => {
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
          alert('unpublish fails');
          return;
        }
        window.location.href = '/listings';
      });
  };
  return <>
        <button className="btn100" onClick={unpublishListing}>Unpublish</button>
    </>;
}

export default ListingUnpublish;
