import React from "react";
import useFetch from "../Hooks/useFetch";
import { PHOTO_GET } from "../api";
import Error from "next/error";
import styles from "./FeedModal.module.css";
import PhotoContent from "../Photo/PhotoContent";
const FeedModal = ({ photo }) => {
  const { dataFetch, loadingFetch, error, request } = useFetch();
  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, []);
  return (
    <div className={styles.modal}>
      {error && <Error error={error} />}
      {dataFetch && <PhotoContent data={dataFetch} />}
    </div>
  );
};

export default FeedModal;
