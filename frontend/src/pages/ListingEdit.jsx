import React from 'react';
import { useParams } from 'react-router-dom';
const ListingEdit = () => {
  const params = useParams();
  const [title, setTitle] = React.useState('');
  const [price, setPrice] = React.useState(0);
  const [thumbnail, setThumbnail] = React.useState('');
  const id = params.listingId.toString();
  const url = 'http://localhost:5005/listings/' + id;
  const token = localStorage.token;
  console.log(id);
  console.log(url);
  const editListing = () => {
    console.log(url);
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify({
        title: title,
        address: {},
        price: Number(price),
        thumbnail: thumbnail,
        metadata: {},
      })
    })
      .then(r => r.json())
      .then(data => {
        if (data.error) {
          alert('edit fails');
          return;
        }
        console.log(data);
      });
  };
  return <>
        Title: <input type="text" value={title} onChange={ event => { setTitle(event.target.value) } }/><br/>
        Thumbnail: <input type="text" value={thumbnail} onChange={ event => { setThumbnail(event.target.value) } }/><br/>
        Price: <input type="text" value={price} onChange={ event => { setPrice(event.target.value) } }/><br/>
        <button onClick={editListing}>Edit</button>
    </>;
}

export default ListingEdit;
