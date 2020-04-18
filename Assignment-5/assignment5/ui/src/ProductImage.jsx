import React from 'react';

export default function ProductImage({ match }) {
  const { imageUrl } = match.params;
  { console.log(imageUrl);
    console.log('imageUrl'); } 
  return (
    <div>
      <br />
      <br />
      <img src={require(`${imageUrl}`)} alt="Not found" />

      {/* <img src={imageUrl} alt="Not found" /> */}
    </div>
  );
}
