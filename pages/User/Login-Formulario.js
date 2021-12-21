import React from "react";
import Input from "../../src/Components/Forms/Input";

const LoginForm = () => {
  return (
    <section>
      <h1>Login</h1>
      <form action="">
        <Input label="Usuario" type="text" />
        <Input label="Senha" type="password" />
      </form>
    </section>
  );
};

export default LoginForm;
