import React from 'react';
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
    {listings.map((listing, idx) => {
      // console.log(localStorage);
      // if (localStorage.email === listing.owner) {
      //   return (
      //       <>
      //         <hr/>
      //         <div key={idx}>
      //           {listing.title}<br/>
      //           <img src={listing.thumbnail}/>
      //         </div>
      //       </>
      //   );
      // }
      // if (localStorage.token === '[object Object]') {
      //   return (
      //       <>
      //         <hr/>
      //         <div key={idx}>
      //           {listing.title}<br/>
      //           <img src={listing.thumbnail}/>
      //         </div>
      //       </>
      //   );
      // }
      return (
          <>
            <hr/>
            <div key={idx}>
              {listing.title}<br/>
              <img src={listing.thumbnail}/>
            </div>
      </>
      );
    })}
  </>;
}

export default ListingUser;
