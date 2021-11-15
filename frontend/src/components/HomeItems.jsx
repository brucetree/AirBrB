import React from 'react';
import '../css/Detail.css';
import PropTypes from 'prop-types';
import '../css/Home.css'

function getQueryVariable (variable) {
  var query = window.location.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (pair[0] === variable) { return pair[1]; }
  }
  return ('');
}

const HomeCard = (props) => {
  const [published, setPublished] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [reviews, setReviews] = React.useState('');
  const [thumbnail, setThumbnail] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [addressLocation, setAddressLocation] = React.useState('');
  const [addressCity, setAddressCity] = React.useState('');
  const [addressState, setAddressState] = React.useState('');
  const [price, setPrice] = React.useState('');
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
        setAddress(data.listing.address.location + data.listing.address.city + data.listing.address.state);
      }
      );
  }, []);
  const url = '../listing/detail/' + props.value;
  const sTitle = getQueryVariable('search_title');
  const sCity = getQueryVariable('search_city');
  if (published === true) {
    console.log(addressLocation);
    console.log(address);
    console.log(addressState);
    if ((sTitle === '' || title.indexOf(sTitle) !== -1) && (sCity === '' || addressCity.indexOf(sCity) !== -1)) {
      return <a href={url}><HomeCardInfo title={title} reviews={reviews} thumbnail={thumbnail} address={addressCity} price={price}/></a>;
    }
  }
  return (
    <>
    </>
  );
}

const HomeCardInfo = (props) => {
  return (
    <div className = "home_card">
      <HomeCardImg thumbnail={props.thumbnail}/>
      <HomeCardTitle value={props.title}/>
      <HomeCardLine title='Reviews' value={props.reviews}/>
      <HomeCardLine title='Price' value={props.price}/>
      <HomeCardLine title='City' value={props.address}/>
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

HomeCardTitle.propTypes = {
  value: PropTypes.string,
}

HomeCardLine.propTypes = {
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
}

export default HomeCard;
