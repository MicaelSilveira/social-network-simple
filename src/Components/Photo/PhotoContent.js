import Link from "next/link";
import React from "react";
const PhotoContent = ({ data }) => {
  const { photo } = data;
  return (
    <div className="animeLeft">
      <div>
        <img src={photo.src} alt={photo.title} />
      </div>
      <div>
        <div>
          <p>
            <a>@{photo.author}</a>
          </p>
          <h1 className="title">
            <Link href={`/Foto/${photo.id}`}>
              <a>{photo.title}</a>
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PhotoContent;
