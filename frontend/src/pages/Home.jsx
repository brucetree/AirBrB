import React from 'react';
import './ListingUser.css'
import '../css/Home.css'
import HomeCard from '../components/HomeItems.jsx';
import '../css/Buttons.css';

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
  // console.log('zheshi listing', listings);
  React.useEffect(() => {
    fetch('http://localhost:5005/listings')
      .then(r => r.json())
      .then(data => setListings(data.listings));
  }, []);
  // console.log(listings);
  return <div className='home_body'>
        <SearchForm/>
        {listings.map((listing, idx) => {
          // console.log(listing);
          return <HomeCard value={listing.id} key={idx}/>;
        })}
    </div>;
}

function getQueryVariable (variable) {
  const query = window.location.search.substring(1);
  const vars = query.split('&');
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split('=');
    if (pair[0] === variable) { return pair[1]; }
  }
  return ('');
}

const SearchForm = (props) => {
  const [Title, setTitle] = React.useState('');
  const [City, setCity] = React.useState('');
  const [PriceMin, setPriceMin] = React.useState('');
  const [PriceMax, setPriceMax] = React.useState('');
  const [BedroomsMin, setBedroomsMin] = React.useState('');
  const [BedroomsMax, setBedroomsMax] = React.useState('');
  const putInfo = () => {
    let t = getQueryVariable('search_title');
    setTitle(t);
    t = getQueryVariable('search_city');
    setCity(t);
    t = getQueryVariable('search_price_min');
    setPriceMin(t);
    t = getQueryVariable('search_price_max');
    setPriceMax(t);
    t = getQueryVariable('search_bedrooms_min');
    setBedroomsMin(t);
    t = getQueryVariable('search_bedrooms_max');
    setBedroomsMax(t);
  }
  React.useEffect(() => {
    putInfo();
  }, []);
  return (
    <div className='home_search_bar'>
    <b>Search Bar</b><br/>
    Tips : Property will not be filtered if nothing is added to the input box
    <form>
      Title : <input name='search_title' value={Title} onChange={ event => { setTitle(event.target.value) } }/>
      City : <input name='search_city' value={City} onChange={ event => { setCity(event.target.value) } }/> <br/>
      Price(Min) : <input name='search_price_min' value={PriceMin} onChange={ event => { setPriceMin(event.target.value) } }/>
      Price(Max) : <input name='search_price_max' value={PriceMax} onChange={ event => { setPriceMax(event.target.value) } }/>
      Bedrooms(Min) <input name='search_bedrooms_min' value={BedroomsMin} onChange={ event => { setBedroomsMin(event.target.value) } }/>
      Bedrooms(Max) <input name='search_bedrooms_max' value={BedroomsMax} onChange={ event => { setBedroomsMax(event.target.value) } }/>
      <br/><button type='submit' className='home_search_btn'>Search</button>
    </form>
    </div>
  );
}

export default Home;
