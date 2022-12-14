import Head from "next/head";
const usuario = ({ data }) => {
  if (data) {
    const userName = data.nome;
    return (
      <div className="animeLeft" style={{ height: "100vh" }}>
        <Head>
          <title>{`Conta | @${userName}`}</title>
        </Head>
        <h1>Welcome: {userName}</h1>
      </div>
    );
  } else return null;
};

export default usuario;
