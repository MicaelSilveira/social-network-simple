import React from "react";
import Button from "../../src/Components/Forms/Button";
import Input from "../../src/Components/Forms/Input";
import useForm from "../../src/Components/Hooks/useForm";
import { TOKEN_POST } from "../../src/api";
const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validade() && password.validade()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });
      const response = await fetch(url, options);
      const json = await response.json();
      console.log(json);
    }
  }
  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="usuario" {...username} />
        <Input label="Senha" type="password" name="senha" {...password} />
        <Button>Entrar</Button>
      </form>
    </section>
  );
};

export default LoginForm;
