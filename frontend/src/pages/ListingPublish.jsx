import React from 'react';
const ListingPublish = (props) => {
  // eslint-disable-next-line react/prop-types
  const id = props.name;
  const url = 'http://localhost:5005/listings/publish/' + id;
  const token = localStorage.token;
  console.log('zheshiid', id);
  console.log('zheshi waibu url', url);
  const publishListing = () => {
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify({
        availability: [
          {}
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
        // navigate('/listings', { replace: true });
        window.location.href = '/listings';
      });
  };
  return <>
        <button onClick={publishListing}>Publish</button>
    </>;
}

export default ListingPublish;
