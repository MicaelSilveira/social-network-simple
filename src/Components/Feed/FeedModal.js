import Error from "next/error";
import React from "react";
import { PHOTO_GET } from "../api";
import useFetch from "../Hooks/useFetch";
import Loading from "../Loading";
import PhotoContent from "../Photo/PhotoContent";
import styles from "./FeedModal.module.css";
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
    <div className={styles.modal} onClick={handleOutsideClick}>
      {loadingFetch && <Loading />}
      {error && <Error error={error} />}
      {dataFetch && <PhotoContent data={dataFetch} />}
    </div>
  );
};

export default FeedModal;
