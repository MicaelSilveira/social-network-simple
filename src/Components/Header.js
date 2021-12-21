import Link from "next/link";
import styles from "../../styles/Header.module.css";
import React from "react";
import Image from "next/image";
import Logo from "../Assets/dogs.svg";
const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link href="/">
          <a href="">
            <Image src={Logo} className={styles.logo} />
          </a>
        </Link>
        <Link href="/User/Login-Home">
          <a href="" className={styles.login}>
            Login / Criar
          </a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
