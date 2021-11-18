import React from 'react';
import './ListingUser.css'
import '../css/Home.css'
import HomeCard from '../components/HomeItems.jsx';
import SearchForm from '../components/SearchForm.jsx';
import '../css/Buttons.css';

const Home = () => {
  const [listings, setListings] = React.useState([]);
  listings.sort(function (a, b) {
    const nameA = a.title.toUpperCase();
    const nameB = b.title.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  React.useEffect(() => {
    fetch('http://localhost:5005/listings')
      .then(r => r.json())
      .then(data => setListings(data.listings));
  }, []);
  return <div className='home_body'>
        <SearchForm/>
        {listings.map((listing, idx) => {
          return <HomeCard value={listing.id} key={idx}/>;
        })}
    </div>;
}

export default Home;
