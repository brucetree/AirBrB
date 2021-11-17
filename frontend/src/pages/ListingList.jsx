import React from 'react';
import FetchDetail from '../components/FetchDetail';
import { Link } from 'react-router-dom';
import '../css/ListingList.css';
import '../css/Buttons.css';
const ListingList = () => {
  const [listings, setListings] = React.useState([]);
  React.useEffect(() => {
    fetch('http://localhost:5005/listings')
      .then(r => r.json())
      .then(data => setListings(data.listings));
  }, []);
  return <div className="listing_list_page">
    <div className="listing_list_title_line">
      Hosted Listings <br/>
      <Link to="/listing/bookingRequest"><button className="book_btn request">BookRequest</button></Link><br/>
    </div>
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
