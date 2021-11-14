import React from 'react';
import ListingCard from '../components/ListingListItems.jsx';
import '../css/ListingList.css';
import PropTypes from 'prop-types';

const FetchDetail = (props) => {
  // eslint-disable-next-line react/prop-types
  const id = props.name;
  const urlEdit = '/listing/edit/' + props.name;
  // const token = localStorage.token;
  // const [owner, setOwner] = React.useState([]);
  const [title, setTitle] = React.useState([]);
  const [type, setType] = React.useState([]);
  const [price, setPrice] = React.useState([]);
  // const [bedrooms, setBedrooms] = React.useState([]);
  const [bathrooms, setBathrooms] = React.useState([]);
  // const [address, setAddress] = React.useState([]);
  const [reviews, setReviews] = React.useState([]);
  const [thumbnail, setThumbnail] = React.useState([]);
  React.useEffect(() => {
    fetch('http://localhost:5005/listings/' + id)
      .then(r => r.json())
      .then(data => {
        // setOwner(data.listing.owner);
        setTitle(data.listing.title);
        // setAddress(data.listing.address);
        setThumbnail(data.listing.thumbnail);
        // setBedrooms(data.listing.metadata.bedrooms);
        setBathrooms(data.listing.metadata.bathrooms);
        setType(data.listing.metadata.type);
        setPrice(data.listing.price);
        setReviews(data.listing.reviews);
      }
      );
  }, []);
  return <ListingCard
    title = {title}
    bathrooms = {bathrooms}
    type = {type}
    price = {price}
    reviews = {reviews.length}
    thumbnail = {thumbnail}
    id = {id}
    urlEdit = {urlEdit}
    />;
}

FetchDetail.propTypes = {
  name: PropTypes.string,
}
export default FetchDetail;
