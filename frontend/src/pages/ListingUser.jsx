import React from 'react';
import { Link } from 'react-router-dom';
import './ListingUser.css'
const ListingUser = () => {
  const [listings, setListings] = React.useState([]);
  listings.sort(function (a, b) {
    const nameA = a.title.toUpperCase(); // ignore upper and lowercase
    const nameB = b.title.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
  console.log('zheshi listing', listings);
  React.useEffect(() => {
    fetch('http://localhost:5005/listings')
      .then(r => r.json())
      .then(data => setListings(data.listings));
  }, []);
  return <>
    <div className={'container'}>
      <div className={'cards'}>
    {listings.map((listing, idx) => {
      const url = '/listing/detail/' + listing.id;
      return (
          <>
            <div key={idx} className={'cards-items'}>
<div className={'header'}>
              <img src={listing.thumbnail} className={'list-img'}/>
            </div>
              <div className={'bottom-container'}>
                <p>{listing.title}</p>
              <Link to={url} key={listing.id}><button>View</button></Link>
              </div>
            </div>
      </>
      );
    })}
    </div>
    </div>
  </>;
}

export default ListingUser;
