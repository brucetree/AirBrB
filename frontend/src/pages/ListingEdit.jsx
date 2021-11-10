import { useParams } from 'react-router-dom';
import React from 'react';

const ListingEdit = () => {
  const params = useParams();
  console.log(params);
  return (
    <>
    {params.listingId}
    </>
  );
}

export default ListingEdit;
