import React from 'react';
import { useParams } from 'react-router-dom';
import '../css/CreateEdit.css';
import '../css/Buttons.css';

const ListingEdit = () => {
  const params = useParams();
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
    console.log(bedroomsList);
  }
  const removeBedrooms = () => {
    setBedroomsList([]);
    setBedrooms(0);
  }
  const updateBedroom = (index, newInput) => {
    const newBedrooms = [...bedroomsList];
    console.log(newBedrooms, index, newInput);
    newBedrooms[index] = newInput;
    setBedroomsList(newBedrooms);
    console.log(bedroomsList);
  }
  const id = params.listingId.toString();

  const url = 'http://localhost:5005/listings/' + id;
  const token = localStorage.token;
  console.log(id);
  console.log(url);
  React.useEffect(() => {
    fetch('http://localhost:5005/listings/' + id)
      .then(r => r.json())
      .then(data => {
        setTitle(data.listing.title);
        setAddressLocation(data.listing.address.location);
        setAddressCity(data.listing.address.city);
        setAddressState(data.listing.address.state);
        setThumbnail(data.listing.thumbnail);
        setBathrooms(data.listing.metadata.bathrooms);
        setType(data.listing.metadata.type);
        setPrice(data.listing.price);
        setBedroomsList(data.listing.metadata.bedroomsList);
        setBedrooms(data.listing.metadata.bedroomsList.length);
      }
      );
  }, []);
  const editListing = () => {
    console.log(url);
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
    fetch(url, {
      method: 'PUT',
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
          alert('edit fails');
          return;
        }
        console.log(data);
        window.location.href = '/listings';
      });
  };
  return <div className='create_edit_page'>
      <div className='create_edit_line title'>Editing Listing</div>
      <div className='create_edit_line'>Title:     <input type="text" value={title} onChange={ event => { setTitle(event.target.value) } }/><br/>
      </div>
      <div className='create_edit_line'>Location: <input type="text" value={addressLocation} onChange={ event => { setAddressLocation(event.target.value) } }/><br/>
      </div>
      <div className='create_edit_line'>City: <input type="text" value={addressCity} onChange={ event => { setAddressCity(event.target.value) } }/><br/>
      </div>
      <div className='create_edit_line'>State: <input type="text" value={addressState} onChange={ event => { setAddressState(event.target.value) } }/><br/>
      </div>
      <div className='create_edit_line'>Price:     <input type="text" value={price} onChange={ event => { setPrice(event.target.value) } }/><br/>
      </div>
      <div className='create_edit_line'>Property Type:    <select onChange={ event => { setType(event.target.value) } }>
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
          <button className='create_edit_btn g' onClick={editListing}>Edit</button>
        </div>
    </div>;
}

export default ListingEdit;
