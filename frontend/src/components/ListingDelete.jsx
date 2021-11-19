import React from 'react';
import '../css/Buttons.css';
import PropTypes from 'prop-types';
const ListingDelete = (props) => {
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
ListingDelete.propTypes = {
  name: PropTypes.string,
}
export default ListingDelete;
