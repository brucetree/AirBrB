import React from 'react';
import '../css/Buttons.css';
const ListingDelete = (props) => {
  // eslint-disable-next-line react/prop-types
  const id = props.name;
  const url = 'http://localhost:5005/listings/' + id;
  const token = localStorage.token;
  const deleteListing = () => {
    console.log('zheshi neibu url', url);
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    })
      .then(r => r.json())
      .then(data => {
        if (data.error) {
          alert('delete fails');
          return;
        }
        window.location.href = '/listings';
      });
  };
  return <>
        <button className="btn100" onClick={deleteListing}>Delete</button>
    </>;
}

export default ListingDelete;
