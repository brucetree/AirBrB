import React from 'react';
import '../css/Detail.css';
import PropTypes from 'prop-types';

const DetailInfo = (props) => {
  const bedrooms = props.bedroomsList.length;
  return (
    <div className = "detail_page">
        <div className = "detail_area">
          <DetailInfoImg thumbnail = {props.thumbnail}/>
        </div>
        <div className = "detail_area r">
          <DetailInfoTitle value = {props.title}/>
          <DetailInfoLine title = "Owner" value = {props.owner}/>
          <DetailInfoLine title = "Price" value = {props.price}/>
          <DetailInfoLine title = "Address" value = {props.address}/>
          <DetailInfoLine title = "Type" value = {props.type}/>
          <DetailInfoLine title = "Bathrooms" value = {props.bathrooms}/>
          <DetailInfoLine title = "Bedrooms" value = {bedrooms}/>
        </div>
    </div>
  );
}

const DetailInfoTitle = (props) => {
  return (
    <div className = "detail_line title">
      {props.value}
    </div>
  );
}

const DetailInfoLine = (props) => {
  return (
    <div className = "detail_line">
      <div className = "detail_line_tag">{props.title}</div> {props.value}
    </div>
  );
}

const DetailInfoImg = (props) => {
  return (
  <div className = "detail_img">
    <img src = {props.thumbnail} height="100%" width="100%"/>
  </div>
  );
}

DetailInfo.propTypes = {
  id: PropTypes.string,
  owner: PropTypes.string,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  address: PropTypes.string,
  type: PropTypes.string,
  bathrooms: PropTypes.string,
  bedroomsList: PropTypes.array,
}

DetailInfoTitle.propTypes = {
  value: PropTypes.string,
}

DetailInfoLine.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
}

DetailInfoImg.propTypes = {
  thumbnail: PropTypes.string,
}
export default DetailInfo;
