import React from 'react';
import FetchDetail from '../components/FetchDetail';
import '../css/ListingList.css';
const ListingList = () => {
  const [listings, setListings] = React.useState([]);
  React.useEffect(() => {
    fetch('http://localhost:5005/listings')
      .then(r => r.json())
      .then(data => setListings(data.listings));
  }, []);
  return <div className="listing_list_page">
    {listings.map((listing, idx) => {
      if (localStorage.email === listing.owner) {
        return (
          <FetchDetail name={listing.id}/>
        );
      } else {
        return (<></>);
      }
    })}
  </div>;
}

export default ListingList;
