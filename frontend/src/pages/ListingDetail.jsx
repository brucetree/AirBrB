import React from 'react';
import { useParams } from 'react-router-dom';
const ListingDetail = () => {
  const params = useParams();
  let id = '';
  id = params.listingId.toString();
  const [owner, setOwner] = React.useState([]);
  const [title, setTitle] = React.useState([]);
  const [type, setType] = React.useState([]);
  const [price, setPrice] = React.useState([]);
  const [bedrooms, setBedrooms] = React.useState([]);
  const [bathrooms, setBathrooms] = React.useState([]);
  const [address, setAddress] = React.useState([]);
  const [thumbnail, setThumbnail] = React.useState([]);
  React.useEffect(() => {
    fetch('http://localhost:5005/listings/' + id)
      .then(r => r.json())
      .then(data => {
        setOwner(data.listing.owner);
        setTitle(data.listing.title);
        setAddress(data.listing.address);
        setThumbnail(data.listing.thumbnail);
        setBedrooms(data.listing.metadata.bedrooms);
        setBathrooms(data.listing.metadata.bathrooms);
        setType(data.listing.metadata.type);
        setPrice(data.listing.price);
      }
      );
  }, []);
  return <>
    Owner: {owner} <br/>
    Title: {title} <br/>
    Price: {price} <br/>
    Address: {address} <br/>
    Type: {type} <br/>
    Bedrooms: {bedrooms} <br/>
    Bathrooms: {bathrooms} <br/>
    <img src={thumbnail}/>
  </>;
}
export default ListingDetail;
