import React from 'react';
import { Link } from 'react-router-dom';
import ListingDelete from './ListingDelete';
import ListingPublish from './ListingPublish';
import ListingUnpublish from './ListingUnpublish';
import FetchDetail from '../components/FetchDetail'
const ListingList = () => {
  const [listings, setListings] = React.useState([]);
  React.useEffect(() => {
    fetch('http://localhost:5005/listings')
      .then(r => r.json())
      .then(data => setListings(data.listings));
  }, []);
  return <>
    {listings.map((listing, idx) => {
      console.log(listing);
      const urlEdit = '/listing/edit/' + listing.id;
      // const urlDelete = '/listing/delete/' + listing.id;
      console.log(localStorage);
      if (localStorage.email === listing.owner) {
        return (
          <>
            <hr/>
          <div key={idx}>
            title:{listing.title}<br/>
            {/* property type:{listing.metadata.type}<br/> */}
            {/* number of bathrooms:{listing.metadata.bathrooms}<br/> */}
            {/* price:{listing.price}<br/> */}
            <FetchDetail name={listing.id}/>
            <Link to={urlEdit} key={listing.id}><button>Edit</button></Link>
            <ListingDelete name={listing.id}/>
            <ListingPublish name={listing.id}/>
            <ListingUnpublish name={listing.id}/>
          <img src={listing.thumbnail}/>
          </div>
          </>
        );
      } else {
        return (<></>);
      }
    })}
  </>;
}

export default ListingList;
