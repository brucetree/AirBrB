import React from 'react';
import '../css/CreateEdit.css';
import '../css/Buttons.css';
const ListingCreate = () => {
  const [title, setTitle] = React.useState('');
  const [addressLocation, setAddressLocation] = React.useState('');
  const [addressCity, setAddressCity] = React.useState('');
  const [addressState, setAddressState] = React.useState('');
  const [price, setPrice] = React.useState(0);
  const [bedrooms, setBedrooms] = React.useState(0);
  const [bathrooms, setBathrooms] = React.useState(0);
  const [bedroomsList, setBedroomsList] = React.useState([]);
  const [type, setType] = React.useState('Entire');
  const [thumbnail, setThumbnail] = React.useState('');
  const uploadImg = (url) => {
    setThumbnail(url);
  };
  const addBedroom = () => {
    const newBedrooms = bedroomsList;
    newBedrooms.push('1');
    setBedroomsList(newBedrooms);
    setBedrooms(bedrooms + 1);
  }
  const removeBedrooms = () => {
    setBedroomsList([]);
    setBedrooms(0);
  }
  const updateBedroom = (index, newInput) => {
    const newBedrooms = [...bedroomsList];
    newBedrooms[index] = newInput;
    setBedroomsList(newBedrooms);
  }
  const createListing = () => {
    const token = localStorage.token;
    if (title === '') {
      alert('Title can not be null!');
      return;
    }
    if (addressLocation === '') {
      alert('location can not be null!');
      return;
    }
    if (addressCity === '') {
      alert('City can not be null!');
      return;
    }
    if (isNaN(price)) {
      alert('price should be a number!');
      return;
    }
    if (price < 0) {
      alert('price should no less than 0!');
      return;
    }
    if (isNaN(bathrooms)) {
      alert('bathrooms should be a number!');
      return;
    }
    if (bathrooms < 0) {
      alert('bathrooms should no less than 0!');
      return;
    }
    if (bedroomsList.length === 0) {
      alert('add at least 1 bedroom please!');
      return;
    }
    if (thumbnail === '') {
      alert('please add a thumbnail!');
      return;
    }
    fetch('http://localhost:5005/listings/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify({
        title: title,
        address: {
          location: addressLocation,
          city: addressCity,
          state: addressState,
        },
        price: price,
        thumbnail: thumbnail,
        metadata: {
          bedrooms: bedrooms,
          bedroomsList: bedroomsList,
          bathrooms: bathrooms,
          type: type
        },
      })
    })
      .then(r => r.json())
      .then(data => {
        if (data.error) {
          alert('create fails');
          return;
        }
        window.location.href = '/listings';
      });
  };
  return <div className='create_edit_page'>
  <div className='create_edit_line title'>Creating Listing</div>
  <div className='create_edit_line'>Title:     <input data-testid="title_create" type="text" value={title} onChange={ event => { setTitle(event.target.value) } }/><br/>
  </div>
  <div className='create_edit_line'>Address(Location): <input type="text" value={addressLocation} onChange={ event => { setAddressLocation(event.target.value) } }/><br/>
  </div>
  <div className='create_edit_line'>Address(City): <input type="text" value={addressCity} onChange={ event => { setAddressCity(event.target.value) } }/><br/>
  </div>
  <div className='create_edit_line'>Address(State): <input type="text" value={addressState} onChange={ event => { setAddressState(event.target.value) } }/><br/>
  </div>
  <div className='create_edit_line'>Price:     <input type="text" value={price} onChange={ event => { setPrice(event.target.value) } }/><br/>
  </div>
  <div className='create_edit_line'>Property Type:    <select data-testid="type_create" onChange={ event => { setType(event.target.value) } }>
      <option value="Entire">Entire</option>
      <option value="Hotel">Hotel</option>
      <option value="Private">Private</option>
      <option value="Shared">Shared</option>
      </select>
  </div>
  <div className='create_edit_line'>Number of bathrooms: <input type="text" value={bathrooms} onChange={ event => { setBathrooms(event.target.value) } }/><br/>
  </div>
  <div className='create_edit_line'>
    {bedroomsList.length < 10 && <button className='create_edit_btn g' onClick={addBedroom}>Add bedroom</button>}
    <button className='create_edit_btn y' onClick={removeBedrooms}>Remove bedroom</button><br/>
  </div>
    {bedroomsList.map((b, idx) => {
      const i = idx + 1;
      return <div key={idx} className='create_edit_line'><>Number of beds in bedroom {i}    </>
      <select idx={idx} value={b} onChange={(e) => updateBedroom(idx, e.target.value)}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      </select>
      </div>
    })}
    <div className='create_edit_line'>Thumbnail: <input type="file" id="create_thumbnail" accept="image/*" onChange={ event => {
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
    </div>
    <div className='create_edit_line e'>
      <button className='create_edit_btn g' onClick={createListing}>Create Listing</button>
    </div>
  </div>;
}

export default ListingCreate;
