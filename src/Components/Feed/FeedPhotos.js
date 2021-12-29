import React from "react";
import FeedPhotoItem from "./FeedPhotoItem";
import useFetch from "../Hooks/useFetch";
import { API_URL } from "../api";
import Error from "../Helper/Error";
import styles from "./FeedPhotos.module.css";
const FeedPhotos = () => {
  const userID = window.localStorage.getItem("userID");
  const { dataFetch, error, loading, request } = useFetch();
  function _GET({ page, total }) {
    return {
      url: `${API_URL}/api/photo/?_page=${page}&_total=${total}&_user=${userID}`,
      options: {
        method: "GET",
        cache: "no-store",
      },
    };
  }
  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = _GET({ page: 1, total: 5 });
      console.log(url);
      const { json } = await request(url, options);
      console.log(json);
    }
    fetchPhotos();
  }, []);

  // React.useEffect(() => {
  //   async function fetchPhotos() {
  //     const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 6199 });
  //     const { json } = await request(url, options);
  //     console.log(json);
  //   }
  //   fetchPhotos();
  // }, []);
  if (error) <Error error={error} />;
  if (dataFetch) {
    console.log(dataFetch);
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {dataFetch.map((photo) => {
          return <FeedPhotoItem key={photo.id} photo={photo} />;
        })}
      </ul>
    );
  } else return null;
};

export default FeedPhotos;
