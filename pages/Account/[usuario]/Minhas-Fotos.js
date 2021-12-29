import React from "react";
import Head from "next/head";
import Feed from "../../../src/Components/Feed/Feed";
const MinhasFotos = ({ data }) => {
  if (data) {
    const userName = data.nome;
    return (
      <div className="animeLeft">
        <Head>
          <title> @{userName}| Minhas Fotos</title>
        </Head>
        <h1 className="title">Minhas fotos</h1>
        <section>
          <Feed />
        </section>
      </div>
    );
  } else return null;
};

export default MinhasFotos;
