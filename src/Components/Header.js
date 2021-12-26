import Link from "next/link";
import styles from "./Header.module.css";
import React from "react";
import Image from "next/image";
import Logo from "../Assets/Logo.svg";

const Header = ({ data, headerUser, setHeaderUser }) => {
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
              <nav className={`${styles.headerUser} animeDown`}>
                <ul className={`${styles.ulHeader}`}>
                  <li>
                    <Link href={`/Account/@${data.nome}/Estatisticas`}>
                      <a>estatisticas</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={`/Account/@${data.nome}/Estatisticas`}>
                      <a>Postar foto</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={`/Account/@${data.nome}/Estatisticas`}>
                      <a>Feed</a>
                    </Link>
                  </li>
                </ul>
              </nav>
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
