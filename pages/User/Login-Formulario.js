import React from "react";
import Button from "../../src/Components/Forms/Button";
import Input from "../../src/Components/Forms/Input";
import useForm from "../../src/Components/Hooks/useForm";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  return (
    <section>
      <h1>Login</h1>
      <form action="">
        <Input label="Usuario" type="text" name="usuario" {...username} />
        <Input label="Senha" type="password" name="senha" {...password} />
        <Button>Entrar</Button>
      </form>
    </section>
  );
};

export default LoginForm;
