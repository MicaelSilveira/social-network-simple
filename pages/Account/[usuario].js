import React from "react";
import Head from "next/head";
const usuario = ({ data }) => {
  if (data)
    return (
      <div className="animeLeft">
        <Head>
          <title>{`Account | ${data.username}`}</title>
        </Head>
        <h1>Bem vindo: {data.username}</h1>
      </div>
    );
  else return null;
};

export default usuario;
