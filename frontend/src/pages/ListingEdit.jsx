import React from 'react';
import { useParams } from 'react-router-dom';
const ListingEdit = () => {
  const params = useParams();
  const [title, setTitle] = React.useState('');
  const [price, setPrice] = React.useState(0);
  const [bedrooms, setBedrooms] = React.useState(0);
  const [bathrooms, setBathrooms] = React.useState(0);
  const [type, setType] = React.useState('1');
  const [address, setAddress] = React.useState('');
  const [thumbnail, setThumbnail] = React.useState('');
  const uploadImg = (url) => {
    setThumbnail(url);
  };
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
        address: address,
        price: Number(price),
        thumbnail: thumbnail,
        metadata: {
          bedrooms: bedrooms,
          bathrooms: bathrooms,
          type: type,
        },
      })
    })
      .then(r => r.json())
      .then(data => {
        if (data.error) {
          alert('edit fails');
          return;
        }
        console.log(data);
        window.location.href = '/listings';
      });
  };
  return <>
        Title: <input type="text" value={title} onChange={ event => { setTitle(event.target.value) } }/><br/>
        Price: <input type="text" value={price} onChange={ event => { setPrice(event.target.value) } }/><br/>
    Address: <input type="text" value={address} onChange={ event => { setAddress(event.target.value) } }/><br/>
    Property Type: <select onChange={ event => { setType(event.target.value) } }>
    <option value="1">Type 1</option>
    <option value="2">Type 2</option>
    <option value="3">Type 3</option>
    <option value="4">Type 4</option>
  </select><br/>
    Number of bathrooms: <input type="text" value={bathrooms} onChange={ event => { setBathrooms(event.target.value) } }/><br/>
    bedrooms: <input type="text" value={bedrooms} onChange={ event => { setBedrooms(event.target.value) } }/><br/>
    Thumbnail: <input type="file" id="create_thumbnail" accept="image/*" onChange={ event => {
    const d = document.getElementById('create_thumbnail');
    let dataURL = '';
    if (d.files.length > 0) {
      const img = d.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        dataURL = reader.result;
        dataURL = dataURL.toString();
        uploadImg(dataURL);
      };
      reader.readAsDataURL(img);
    }
  } }/><br/>
        <button onClick={editListing}>Edit</button>
    </>;
}

export default ListingEdit;
