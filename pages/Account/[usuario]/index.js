import React from "react";
import Head from "next/head";
import Button from "../../../src/Components/Forms/Button";
const usuario = ({ data, userLogout }) => {
  if (data) {
    const userName = data.nome;
    return (
      <div className="animeLeft" style={{ height: "100vh" }}>
        <Head>
          <title>{`Conta | @${userName}`}</title>
        </Head>
        <h1>Bem vindo: {userName}</h1>

        <Link href={`@${userName}/Estatisticas`}>
          <a>Estatisticas</a>
        </Link>
        <Button onClick={userLogout}>Sair</Button>
      </div>
    );
  } else return null;
};

export default usuario;
