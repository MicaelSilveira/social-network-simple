import React from "react";
const FeedPhotoItem = ({ photo }) => {
  console.log(photo.id);
  return (
    <li>
      <img src={photo.src} alt={photo.title} />
      <span>{photo.title}</span>
    </li>
  );
};

export default FeedPhotoItem;
