import React from "react";
import Head from "next/head";
const MinhasFotos = ({ data }) => {
  const userName = data.nome;
  return (
    <div className="animeLeft">
      <Head>
        <title> @{userName}| Minhas Fotos</title>
      </Head>
      <h1 className="title">Minhas fotos</h1>
    </div>
  );
};

export default MinhasFotos;
