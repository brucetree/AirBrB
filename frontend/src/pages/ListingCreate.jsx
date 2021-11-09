import React from 'react';
const ListingCreate = () => {
  const [title, setTitle] = React.useState('');
  const [address] = React.useState('');
  const [price] = React.useState(0);
  const [thumbnail, setThumbnail] = React.useState('');
  const createListing = () => {
    const token = localStorage.token;
    fetch('http://localhost:5005/listings/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify({
        title: title,
        address: address,
        price: price,
        thumbnail: thumbnail,
        metadata: {},
      })
    })
      .then(r => r.json())
      .then(data => console.log(data));
  };
  return <>
      Title: <input type="text" value={title} onChange={ event => { setTitle(event.target.value) } }/><br/>
    Thumbnail: <input type="text" value={thumbnail} onChange={ event => { setThumbnail(event.target.value) } }/><br/>
    <button onClick={createListing}>Create Listing</button>
  </>;
}

export default ListingCreate;
