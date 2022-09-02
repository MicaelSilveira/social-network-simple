import React from "react";
import { PHOTOS_GET } from "../api";
import FeedPhotoItem from "../Feed/FeedPhotoItem";
import styles from "../Feed/FeedPhotos.module.css";
import useFetch from "../Hooks/useFetch";
const FeedPhotos = ({ setModalPhoto }) => {
  const { dataFetch, request } = useFetch();
  React.useEffect(() => {
    if (!window.localStorage.getItem("userID")) {
      window.localStorage.setItem("userID", "1");
    }
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET();
      await request(url, options);
    }
    fetchPhotos();
  }, []);
  if (dataFetch) {
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {dataFetch.map((photo) => {
          return (
            <FeedPhotoItem
              photo={photo}
              setModalPhoto={setModalPhoto}
              key={photo.id}
            />
          );
        })}
      </ul>
    );
  } else return null;
};

export default FeedPhotos;
