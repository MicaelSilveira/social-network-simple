import React from "react";
import Footer from "../../src/Components/Footer";
import Header from "../../src/Components/Header";
import LoginFormulario from "./Login-Formulario";
import Head from "next/head";
const Login = () => {
  return (
    <div>
      <Head>
        <title>Login | Home</title>
      </Head>
      <Header />
      <LoginFormulario />
      <Footer />
    </div>
  );
};

export default Login;
