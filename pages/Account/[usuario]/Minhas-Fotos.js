import Head from "next/head";
import Feed from "../../../src/Components/Feed/Feed";
import styles from "../../../styles/Minhas-Fotos.module.css";
const MinhasFotos = ({ data }) => {
  if (data) {
    const userName = data.nome;
    return (
      <div className={`${styles.minhasFotos} animeLeft`}>
        <Head>
          <title> @{userName}| My photos</title>
        </Head>
        <h1 className="title">My photos</h1>
        <section>
          <Feed />
        </section>
      </div>
    );
  } else return null;
};

export default MinhasFotos;
