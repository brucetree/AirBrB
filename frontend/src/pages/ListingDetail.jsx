import React from 'react';
import { useParams } from 'react-router-dom';
import '../css/Detail.css';
import { DetailInfo, DetailInfoTitle } from '../components/DetailPageItems.jsx';
import PropTypes from 'prop-types';
import Booking from '../components/Booking';
import BookingOrnot from '../components/BookingOrnot';
// import Review from '../components/Review';

const ListingDetail = () => {
  const params = useParams();
  let id = '';
  id = params.listingId.toString();
  console.log(id);
  const [owner, setOwner] = React.useState([]);
  const [title, setTitle] = React.useState([]);
  const [type, setType] = React.useState([]);
  const [price, setPrice] = React.useState([]);
  const [bedroomsList, setBedroomsList] = React.useState([]);
  const [bathrooms, setBathrooms] = React.useState([]);
  const [address, setAddress] = React.useState([]);
  const [thumbnail, setThumbnail] = React.useState([]);
  const [reviews, setReviews] = React.useState([]);
  const [rating, setRating] = React.useState(0);
  const countRating = (l) => {
    let c = 0;
    for (const i in l) {
      c = c + parseInt(l[i].score);
    }
    if (l.length > 0) {
      setRating(c / l.length);
    }
  }
  React.useEffect(() => {
    fetch('http://localhost:5005/listings/' + id)
      .then(r => r.json())
      .then(data => {
        countRating(data.listing.reviews);
        setOwner(data.listing.owner);
        setTitle(data.listing.title);
        setAddress(data.listing.address.location + ', ' + data.listing.address.city + ', ' + data.listing.address.state);
        setThumbnail(data.listing.thumbnail);
        setBedroomsList(data.listing.metadata.bedroomsList);
        setBathrooms(data.listing.metadata.bathrooms);
        setType(data.listing.metadata.type);
        setPrice(data.listing.price);
        setReviews(data.listing.reviews);
      }
      );
  }, []);
  return <div className = "detail_page">
    <DetailInfo
    rating = {rating}
    id = {id}
    owner = {owner}
    title = {title}
    price = {price}
    address = {address}
    type = {type}
    bathrooms = {bathrooms}
    bedroomsList = {bedroomsList}
    thumbnail = {thumbnail}/>
    <div className = "detail_area r h">
    {bedroomsList.map((b, idx) => {
      const i = idx + 1;
      const n = 'Bedroom ' + i;
      return <BedroomsDetail key={idx} name={n} beds={b}/>
    })}
    </div>
    <div className = "detail_area r center">
    <DetailInfoTitle value='Booking'/>
      <Booking price={price} name={id}/>
    <DetailInfoTitle value='Add review'/>
      <BookingOrnot listingid={id}/>
    </div>
    <div className = "detail_area r">
    <DetailInfoTitle value='Reviews'/>
    {reviews.map((b, idx) => {
      const s = b.score;
      const r = b.reviews;
      return <ReviewsDetail key={idx} score={s} review={r}/>
    })}
    </div>
      </div>;
}

const BedroomsDetail = (props) => {
  return (
    <div className = "bedroom_card">
      <div className = "bedroom_card_line">{props.name}</div>
      <div className = "bedroom_card_line text">Beds: {props.beds}</div>
    </div>
  );
}

BedroomsDetail.propTypes = {
  name: PropTypes.string,
  beds: PropTypes.string,
}

const ReviewsDetail = (props) => {
  return (
    <div className = "review_card">
      <div className = "review_card_line">Score: {props.score}</div>
      Review: {props.review}
    </div>
  );
}

ReviewsDetail.propTypes = {
  score: PropTypes.string,
  review: PropTypes.string,
}

export default ListingDetail;
