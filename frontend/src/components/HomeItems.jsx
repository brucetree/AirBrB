import React from 'react';
import '../css/Detail.css';
import PropTypes from 'prop-types';

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
  const [published, setPublished] = React.useState([]);
  const [title, setTitle] = React.useState([]);
  const [reviews, setReviews] = React.useState([]);
  const [thumbnail, setThumbnail] = React.useState([]);
  const [address, setAddress] = React.useState([]);
  React.useEffect(() => {
    fetch('http://localhost:5005/listings/' + props.value)
      .then(r => r.json())
      .then(data => {
        // setOwner(data.listing.owner);
        setPublished(data.listing.published);
        setTitle(data.listing.title);
        setReviews(data.listing.reviews.length);
        setThumbnail(data.listing.thumbnail);
        setAddress(data.listing.address);
      }
      );
  }, []);
  const sTitle = getQueryVariable('search_title');
  const sLocation = getQueryVariable('search_location');
  if (published === true) {
    if ((sTitle === '' || title.indexOf(sTitle) !== -1) && (sLocation === '' || address.indexOf(sLocation) !== -1)) {
      return <>{title},{reviews},{thumbnail}</>;
    }
  }
  return (
    <>
    </>
  );
}

HomeCard.propTypes = {
  value: PropTypes.string,
}

export default HomeCard;
