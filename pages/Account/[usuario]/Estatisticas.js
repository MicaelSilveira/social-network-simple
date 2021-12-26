import React from "react";
import Head from "next/head";

const Estatisticas = ({ data }) => {
  if (data) {
    const userName = data.nome;
    return (
      <div className="animeLeft">
        <Head>
          <title> @{userName} | Estatisticas</title>
        </Head>
        <h1 className="title">Estatisticas</h1>
      </div>
    );
  } else return null;
};

export default Estatisticas;
