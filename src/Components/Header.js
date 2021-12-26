import Link from "next/link";
import styles from "./Header.module.css";
import React from "react";
import Image from "next/image";
import Logo from "../Assets/Logo.svg";
import HeaderUser from "./HeaderUser";
const Header = ({ data, headerUser, setHeaderUser, userLogout }) => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link href="/">
          <a>
            <Image src={Logo} className={styles.logo} />
          </a>
        </Link>
        {data ? (
          <>
            <Link href={`/Account/@${data.nome}`}>
              <a onClick={() => setHeaderUser(true)} className={styles.login}>
                <strong>{headerUser ? `@${data.nome}` : "Sua Conta"}</strong>
              </a>
            </Link>
            {headerUser && (
              <HeaderUser userName={data.nome} userLogout={userLogout} />
            )}
          </>
        ) : (
          <Link href="/User/Login-Formulario">
            <a className={styles.login}>Login / Criar</a>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
