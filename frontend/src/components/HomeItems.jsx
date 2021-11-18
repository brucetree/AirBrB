import React from 'react';
import '../css/Detail.css';
import PropTypes from 'prop-types';
import '../css/Home.css'

function getQueryVariable (variable) {
  const query = window.location.search.substring(1);
  const vars = query.split('&');
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split('=');
    if (pair[0] === variable) { return pair[1]; }
  }
  return ('');
}

const HomeCard = (props) => {
  const [published, setPublished] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [reviews, setReviews] = React.useState('');
  const [thumbnail, setThumbnail] = React.useState('');
  const [addressLocation, setAddressLocation] = React.useState('');
  const [addressCity, setAddressCity] = React.useState('');
  const [addressState, setAddressState] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [beds, setBeds] = React.useState(0);
  const [rating, setRating] = React.useState(0);
  const [bedrooms, setBedrooms] = React.useState(0);
  const countBeds = (l) => {
    let c = 0;
    for (const i in l) {
      c = c + parseInt(l[i]);
    }
    setBeds(c);
  }
  const countRating = (l) => {
    let c = 0;
    for (const i in l) {
      c = c + parseInt(l[i].score);
    }
    if (l.length > 0) {
      const num = (c / l.length).toFixed(1);
      setRating(num);
    }
  }
  React.useEffect(() => {
    fetch('http://localhost:5005/listings/' + props.value)
      .then(r => r.json())
      .then(data => {
        // setOwner(data.listing.owner);
        setPrice(data.listing.price);
        setPublished(data.listing.published);
        setTitle(data.listing.title);
        setReviews(data.listing.reviews.length);
        setThumbnail(data.listing.thumbnail);
        setAddressLocation(data.listing.address.location);
        setAddressCity(data.listing.address.city);
        setAddressState(data.listing.address.state);
        setBedrooms(data.listing.metadata.bedroomsList.length);
        countBeds(data.listing.metadata.bedroomsList);
        countRating(data.listing.reviews);
      }
      );
  }, []);
  const url = '../listing/detail/' + props.value;
  const sTitle = getQueryVariable('search_title');
  const sCity = getQueryVariable('search_city');
  let sPriceMin = getQueryVariable('search_price_min');
  let sPriceMax = getQueryVariable('search_price_max');
  sPriceMax = parseInt(sPriceMax);
  sPriceMin = parseInt(sPriceMin);
  let sBedroomsMin = getQueryVariable('search_bedrooms_min');
  let sBedroomsMax = getQueryVariable('search_bedrooms_max');
  sBedroomsMax = parseInt(sBedroomsMax);
  sBedroomsMin = parseInt(sBedroomsMin);
  if (addressLocation === '123' && addressState === '123' && beds === '') {
    console.log('h1');
  }
  if (published === true) {
    if (sTitle !== '' && title.indexOf(sTitle) === -1) {
      return <></>;
    }
    if (sCity !== '' && addressCity.indexOf(sCity) === -1) {
      return <></>;
    }
    if (isNaN(sPriceMax) === false && price > sPriceMax) {
      return <></>;
    }
    if (isNaN(sPriceMin) === false && price < sPriceMin) {
      return <></>;
    }
    if (isNaN(sBedroomsMax) === false && bedrooms > sBedroomsMax) {
      return <></>;
    }
    if (isNaN(sBedroomsMin) === false && bedrooms < sBedroomsMin) {
      return <></>;
    }
    return <a href={url}><HomeCardInfo bedrooms={bedrooms} rating={rating} beds={beds} title={title} reviews={reviews} thumbnail={thumbnail} address={addressCity} price={price}/></a>;
  }
  return (
    <>
    </>
  );
}

const HomeCardInfo = (props) => {
  let s = '';
  if (props.rating > 1) {
    s = s + '★';
  } else s = s + '☆';
  if (props.rating > 3) {
    s = s + '★';
  } else s = s + '☆';
  if (props.rating > 5) {
    s = s + '★';
  } else s = s + '☆';
  if (props.rating > 7) {
    s = s + '★';
  } else s = s + '☆';
  if (props.rating > 9) {
    s = s + '★';
  } else s = s + '☆';
  s = s + ' ' + props.rating;
  return (
    <div className = "home_card">
      <HomeCardImg thumbnail={props.thumbnail}/>
      <HomeCardTitle value={props.title}/>
      <HomeCardLine title='Price' value={props.price}/>
      <HomeCardLine title='City' value={props.address}/>
      <HomeCardLine title='Bedrooms' value={props.bedrooms}/>
      <HomeCardLine title='Beds' value={props.beds}/>
      <HomeCardLine title='Reviews' value={props.reviews}/>
      <HomeCardLineY title='Rating' value={s}/>
    </div>
  );
}

const HomeCardImg = (props) => {
  return (
  <div className = "home_card_img">
    <img src = {props.thumbnail} height="100%" width="100%"/>
  </div>
  );
}

const HomeCardTitle = (props) => {
  return (
    <div className = "home_card_line title">
      {props.value}
    </div>
  );
}

const HomeCardLine = (props) => {
  return (
    <div className = "home_card_line">
      <div className = "home_card_line_tag">{props.title}</div> {props.value}
    </div>
  );
}

const HomeCardLineY = (props) => {
  return (
    <div className = "home_card_line yellow">
      <div className = "home_card_line_tag">{props.title}</div> {props.value}
    </div>
  );
}

HomeCardTitle.propTypes = {
  value: PropTypes.string,
}

HomeCardLine.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
}

HomeCardLineY.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
}

HomeCardImg.propTypes = {
  thumbnail: PropTypes.string,
}

HomeCard.propTypes = {
  value: PropTypes.string,
}

HomeCardInfo.propTypes = {
  title: PropTypes.string,
  reviews: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.string,
  address: PropTypes.string,
  bedrooms: PropTypes.string,
  beds: PropTypes.string,
  rating: PropTypes.number,
}

export default HomeCard;
