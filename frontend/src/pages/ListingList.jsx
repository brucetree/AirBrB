import React from 'react';
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
      return (
          <>
            <hr/>
          <div key={idx}>{listing.title}
          <img src={listing.thumbnail}/>
          </div>
          </>
      )
    })}
  </>;
}

export default ListingList;
