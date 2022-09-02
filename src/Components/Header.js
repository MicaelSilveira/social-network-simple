import Image from "next/image";
import Link from "next/link";
import Logo from "../Assets/Logo.svg";
import styles from "./Header.module.css";
import HeaderUser from "./HeaderUser";
import Loading from "./Loading";
const Header = ({ data, headerUser, setHeaderUser, userLogout, loading }) => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link href="/">
          <a>
            <Image src={Logo} className={styles.logo} />
          </a>
        </Link>
        {loading && <Loading />}
        {data ? (
          <>
            <Link href={`/Account/@${data.nome}`}>
              <a onClick={() => setHeaderUser(true)} className={styles.login}>
                <strong>{headerUser ? `@${data.nome}` : "Your Account"}</strong>
              </a>
            </Link>
            {headerUser && (
              <HeaderUser userName={data.nome} userLogout={userLogout} />
            )}
          </>
        ) : (
          <Link href="/User/Login-Formulario">
            <a className={styles.login}>Login / Create</a>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
