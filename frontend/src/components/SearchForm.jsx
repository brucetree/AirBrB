import '../css/Home.css'
import '../css/Buttons.css';
import React from 'react';

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
  const [RatingMin, setRatingMin] = React.useState('0');
  const [RatingMax, setRatingMax] = React.useState('10');
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
    t = getQueryVariable('search_rating_min');
    t = parseInt(t);
    if (isNaN(t) === false) {
      setRatingMin(t);
    }
    t = getQueryVariable('search_rating_max');
    t = parseInt(t);
    if (isNaN(t) === false) {
      setRatingMax(t);
    }
  }
  React.useEffect(() => {
    putInfo();
  }, []);
  return (
    <div className='home_search_bar'>
    <b>Search Bar</b><br/>
    Tips : Property will not be filtered if nothing is added to the input box
    <form>
      Title : <input data-testid="title" name='search_title' value={Title} onChange={ event => { setTitle(event.target.value) } }/>
      City : <input data-testid="city" name='search_city' value={City} onChange={ event => { setCity(event.target.value) } }/> <br/>
      Price(Min) : <input data-testid="price_min" name='search_price_min' value={PriceMin} onChange={ event => { setPriceMin(event.target.value) } }/>
      Price(Max) : <input data-testid="price_max" name='search_price_max' value={PriceMax} onChange={ event => { setPriceMax(event.target.value) } }/>
      Bedrooms(Min) <input data-testid="bedrooms_min" name='search_bedrooms_min' value={BedroomsMin} onChange={ event => { setBedroomsMin(event.target.value) } }/>
      Bedrooms(Max) <input data-testid="bedrooms_max" name='search_bedrooms_max' value={BedroomsMax} onChange={ event => { setBedroomsMax(event.target.value) } }/>
      <br/>
      Rating(Min) <select data-testid="rating_min" name='search_rating_min' value={RatingMin} onChange={ event => { setRatingMin(event.target.value) } }>
      <option value="0">0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
      </select>
      &nbsp;&nbsp;&nbsp;Rating(Max) <select data-testid="rating_max" name='search_rating_max' value={RatingMax} onChange={ event => { setRatingMax(event.target.value) } }>
      <option value="0">0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
      </select>
      <br/><button type='submit' className='home_search_btn'>Search</button>
    </form>
    </div>
  );
}

export default SearchForm;
