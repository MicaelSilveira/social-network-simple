import React from "react";
import LoginFormulario from "./Login-Formulario";
import Head from "next/head";
const Login = ({ userLogin, loading, erro, data, login }) => {
  return (
    <div>
      <Head>
        <title>Login | Home </title>
      </Head>
      {/* <Header /> */}
      <LoginFormulario
        userLogin={userLogin}
        loading={loading}
        erro={erro}
        data={data}
        login={login}
      />
      {/* <Footer /> */}
    </div>
  );
};

export default Login;
