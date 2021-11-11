import React from 'react';
const FetchDetail = (props) => {
  // eslint-disable-next-line react/prop-types
  const id = props.name;
  // const token = localStorage.token;
  // const [owner, setOwner] = React.useState([]);
  // const [title, setTitle] = React.useState([]);
  const [type, setType] = React.useState([]);
  const [price, setPrice] = React.useState([]);
  // const [bedrooms, setBedrooms] = React.useState([]);
  const [bathrooms, setBathrooms] = React.useState([]);
  // const [address, setAddress] = React.useState([]);
  const [reviews, setReviews] = React.useState([]);
  // const [thumbnail, setThumbnail] = React.useState([]);
  React.useEffect(() => {
    fetch('http://localhost:5005/listings/' + id)
      .then(r => r.json())
      .then(data => {
        // setOwner(data.listing.owner);
        // setTitle(data.listing.title);
        // setAddress(data.listing.address);
        // setThumbnail(data.listing.thumbnail);
        // setBedrooms(data.listing.metadata.bedrooms);
        setBathrooms(data.listing.metadata.bathrooms);
        setType(data.listing.metadata.type);
        setPrice(data.listing.price);
        setReviews(data.listing.reviews);
      }
      );
  }, []);
  return <>
        Price: {price} <br/>
        Type: {type} <br/>
        Bathrooms: {bathrooms} <br/>
      SVG rating:<br/>
      Number of beds:<br/>
      Number of reviews: {reviews.length} <br/>
    </>;
}
export default FetchDetail;
