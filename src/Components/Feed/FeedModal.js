import React from "react";
import useFetch from "../Hooks/useFetch";
import { PHOTO_GET } from "../api";
import Error from "next/error";
import styles from "./FeedModal.module.css";
import PhotoContent from "../Photo/PhotoContent";
const FeedModal = ({ photo, setModalPhoto }) => {
  const { dataFetch, loadingFetch, error, request } = useFetch();
  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, []);
  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModalPhoto(null);
  }
  return (
    <div className={styles.modal} onCLick={handleOutsideClick}>
      {error && <Error error={error} />}
      {dataFetch && <PhotoContent data={dataFetch} />}
    </div>
  );
};

export default FeedModal;
