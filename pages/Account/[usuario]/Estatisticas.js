import React from "react";
import Head from "next/head";

const Estatisticas = ({ data }) => {
  if (data) {
    const userName = data.nome;
    return (
      <div className="animeLeft" style={{ height: "100vh" }}>
        <Head>
          <title> @{userName} | Estatisticas</title>
        </Head>
        <h1 className="title">Estatisticas</h1>
      </div>
    );
  } else return null;
};

export default Estatisticas;
