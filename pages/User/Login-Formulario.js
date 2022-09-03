import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../../src/Components/Forms/Button";
import Input from "../../src/Components/Forms/Input";
import Error from "../../src/Components/Helper/Error";
import useForm from "../../src/Components/Hooks/useForm";
import styles from "../../styles/Login-Form.module.css";
const LoginForm = ({ userLogin, loading, erro, login, data }) => {
  const router = useRouter();
  if (login) router.push(`/Account/@${data.username}`);
  const username = useForm();
  const password = useForm();
  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validade() && password.validade()) {
      userLogin(username.value, password.value);
    }
  }
  return (
    <div className={`${styles.login} margin`}>
      <Head>
        <title>Login | Formulario</title>
      </Head>
      <section className="animeLeft">
        <h1 className="title">Login</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input label="User" type="text" name="usuario" {...username} />

          <Input label="Password" type="password" name="senha" {...password} />
          {loading ? (
            <Button disabled>Loading...</Button>
          ) : (
            <Button>Enter</Button>
          )}
          <Error error={erro} />
        </form>
        <Link href="/User/Login-SenhaPerdida">
          <a className={styles.perdeu}>lost password ?</a>
        </Link>
        <div className={styles.cadastro}>
          <h2 className={styles.subtitle}>Create</h2>
          <p>Don t have an account yet ?</p>
          <Link href="/User/Login-CriarUsuario">
            <Button>Create</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LoginForm;
