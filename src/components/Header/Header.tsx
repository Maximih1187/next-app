import React from "react";
import styles from "./styled.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.header}>
      <nav>
        <ul className={styles.ul}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/tel">Tel</Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
