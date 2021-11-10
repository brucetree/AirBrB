import React from 'react';
import { Link } from 'react-router-dom';
import ListingDelete from './ListingDelete';
const ListingList = () => {
  const [listings, setListings] = React.useState([]);
  React.useEffect(() => {
    fetch('http://localhost:5005/listings')
      .then(r => r.json())
      .then(data => setListings(data.listings));
  }, []);
  return <>
    {listings.map((listing, idx) => {
      const urlEdit = '/listing/edit/' + listing.id;
      // const urlDelete = '/listing/delete/' + listing.id;
      return (
          <>
            <hr/>
          <div key={idx}>
            {listing.title}<br/>
            <Link to={urlEdit} key={listing.id}><button>Edit</button></Link>
            <ListingDelete name={listing.id}/>
          <img src={listing.thumbnail}/>
          </div>
          </>
      )
    })}
  </>;
}

export default ListingList;
