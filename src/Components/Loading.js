import styles from "./Loading.module.css";
const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader_container}>
        <div className={styles.loader}></div>
      </div>
    </div>
  );
};
export default Loading;
