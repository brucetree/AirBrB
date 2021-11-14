import React from 'react';
import '../css/Buttons.css';
// import { useNavigate } from 'react-router-dom'
// import { useParams } from 'react-router-dom';
const ListingDelete = (props) => {
  // const params = useParams();
  // const id = params.listingId.toString();
  // eslint-disable-next-line react/prop-types
  // const navigate = useNavigate();
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
        console.log(data);
        // navigate('/listings', { replace: true });
        window.location.href = '/listings';
      });
  };
  return <>
        <button className="btn100" onClick={deleteListing}>Delete</button>
    </>;
}

export default ListingDelete;
