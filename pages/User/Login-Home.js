import React from "react";
import LoginFormulario from "./Login-Formulario";
import Head from "next/head";
import Link from "next/link";
import Button from "../../src/Components/Forms/Button";
import styles from "../../styles/Login-Home.module.css";
const Login = ({ userLogin, loading, erro }) => {
  return (
    <div>
      <Head>
        <title>Login | Home </title>
      </Head>
      {/* <Header /> */}
      <LoginFormulario userLogin={userLogin} loading={loading} erro={erro} />
      {/* <Footer /> */}
    </div>
  );
};

export default Login;
