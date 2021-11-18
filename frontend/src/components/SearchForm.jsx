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
      Title : <input data-testid="title" name='search_title' value={Title} onChange={ event => { setTitle(event.target.value) } }/>
      City : <input data-testid="city" name='search_city' value={City} onChange={ event => { setCity(event.target.value) } }/> <br/>
      Price(Min) : <input data-testid="price_min" name='search_price_min' value={PriceMin} onChange={ event => { setPriceMin(event.target.value) } }/>
      Price(Max) : <input data-testid="price_max" name='search_price_max' value={PriceMax} onChange={ event => { setPriceMax(event.target.value) } }/>
      Bedrooms(Min) <input data-testid="bedrooms_min" name='search_bedrooms_min' value={BedroomsMin} onChange={ event => { setBedroomsMin(event.target.value) } }/>
      Bedrooms(Max) <input data-testid="bedrooms_max" name='search_bedrooms_max' value={BedroomsMax} onChange={ event => { setBedroomsMax(event.target.value) } }/>
      <br/><button type='submit' className='home_search_btn'>Search</button>
    </form>
    </div>
  );
}

export default SearchForm;
