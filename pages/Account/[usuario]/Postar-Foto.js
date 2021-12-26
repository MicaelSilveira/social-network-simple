import React from "react";
import Head from "next/head";
const PostarFoto = ({ data }) => {
  const userName = data.nome;
  return (
    <div className="animeLeft">
      <Head>
        <title> @{userName} | Postar Foto</title>
      </Head>
      <h1 className="title">Postar fotos</h1>
    </div>
  );
};

export default PostarFoto;
