import React from 'react';
import './ListingUser.css'
import '../css/Home.css'
import HomeCard from '../components/HomeItems.jsx';

const Home = () => {
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
  console.log(listings);
  return <div className='home_body'>
        <SearchForm/>
        {listings.map((listing, idx) => {
          console.log(listing);
          return <HomeCard value={listing.id} key={idx}/>;
        })}
    </div>;
}

const SearchForm = (props) => {
  return (
    <div className='home_search_bar'>
    <b>Search Bar</b><br/>
    Tips : Property will not be filtered if nothing is added to the input box )
    <form>
      Title : <input name='search_title'/>
      Location : <input name='search_location'/>
      <button type='submit' className='home_search_btn'>Search</button>
    </form>
    </div>
  );
}

export default Home;
