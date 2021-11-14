import React from 'react';
import { Link } from 'react-router-dom';
import './ListingUser.css'
import HomeCard from '../components/HomeItems.jsx';

const Home = () => {
  localStorage.search_title = '';
  localStorage.search_location = '';
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
  return <>
        <SearchForm/>
        {listings.map((listing, idx) => {
          const url = '/listing/detail/' + listing.id;
          console.log(listing);
          return (
                <>
                    <HomeCard value={listing.id}/>
                    <div key={idx} className={'cards-items'}>
                        <div className={'header'}>
                            <img src={listing.thumbnail} className={'list-img'}/>
                        </div>
                        <div className={'bottom-container'}>
                            <p>Title:{listing.title}</p>
                            <p>Number of reviews: {listing.reviews.length}</p>
                            <Link to={url} key={listing.id}>
                                <button>View</button>
                            </Link>
                        </div>
                    </div>
                </>
          );
        })}
    </>;
}

const SearchForm = (props) => {
  return (
    <form>
      <input name='search_title'/>
      <input name='search_location'/>
      <button type='submit'>Search</button>
    </form>
  );
}

export default Home;
