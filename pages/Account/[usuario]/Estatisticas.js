import React from "react";
import Head from "next/head";

const Estatisticas = ({ data }) => {
  const userName = data.nome;
  return (
    <div className="animeLeft">
      <Head>
        <title> @{userName} | Estatisticas</title>
      </Head>
      <h1 className="title">Minhas fotos</h1>
    </div>
  );
};

export default Estatisticas;
