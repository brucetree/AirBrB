import React from 'react';
import '../css/ListingList.css';
import PropTypes from 'prop-types';
import ListingDelete from '../components/ListingDelete';
// import ListingPublish from '../components/ListingPublish';
import ListingUnpublish from '../components/ListingUnpublish';
import { Link } from 'react-router-dom';
import '../css/Buttons.css';

const ListingCard = (props) => {
  const thumbnail = props.thumbnail;
  const price = props.price + '';
  const publishUrl = '/listing/publish/' + props.id;
  if (props.published === true) {
    return (
      <div className = "listing_card">
        <ListingCardImg thumbnail = {thumbnail}/>
        <ListingCardTitle value = {props.title}/>
        <ListingCardLine title = "Price" value = {price}/>
        <ListingCardLine title = "Type" value = {props.type}/>
        <ListingCardLine title = "Bathrooms" value = {props.bathrooms}/>
        <ListingCardLine title = "Beds" value = {props.beds}/>
        <ListingCardLine title = "Reviews" value = {props.reviews}/>
        <ListingCardLine title = "Rating" value = {props.rating}/>
        <Link to = {props.urlEdit}><button className='btn100'>Edit</button></Link>
        <ListingDelete name = {props.id}/>
        <ListingUnpublish name = {props.id}/>
      </div>
    );
  }
  return (
    <div className = "listing_card">
      <ListingCardImg thumbnail = {thumbnail}/>
      <ListingCardTitle value = {props.title}/>
      <ListingCardLine title = "Price" value = {price}/>
      <ListingCardLine title = "Type" value = {props.type}/>
      <ListingCardLine title = "Bathrooms" value = {props.bathrooms}/>
      <ListingCardLine title = "Beds" value = {props.beds}/>
      <ListingCardLine title = "Reviews" value = {props.reviews}/>
      <ListingCardLine title = "Rating" value = {props.rating}/>
      <Link to = {props.urlEdit}><button className='btn100'>Edit</button></Link>
      <ListingDelete name = {props.id}/>
      {/* <ListingPublish name = {props.id}/> */}
        <Link to={publishUrl}><button className="btn100">Publish</button></Link>
    </div>
  );
}

const ListingCardTitle = (props) => {
  return (
    <div className = "listing_card_line title">
      {props.value}
    </div>
  );
}

const ListingCardLine = (props) => {
  return (
    <div className = "listing_card_line">
      <div className = "listing_card_line_tag">{props.title}</div> {props.value}
    </div>
  );
}

const ListingCardImg = (props) => {
  return (
  <div className = "listing_card_img">
    <img src = {props.thumbnail} height="100%" width="100%"/>
  </div>
  );
}

ListingCardTitle.propTypes = {
  value: PropTypes.string,
}

ListingCardLine.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
}

ListingCard.propTypes = {
  id: PropTypes.string,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  address: PropTypes.string,
  type: PropTypes.string,
  reviews: PropTypes.string,
  bedrooms: PropTypes.string,
  bathrooms: PropTypes.number,
  urlEdit: PropTypes.string,
  beds: PropTypes.number,
  published: PropTypes.string,
  rating: PropTypes.string,
}

ListingCardImg.propTypes = {
  thumbnail: PropTypes.string,
}
export default ListingCard;
