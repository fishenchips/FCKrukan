import React from "react";
import Link from "next/link";
import styles from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={styles.header}>
      <div>
        <h2>Välkommna till FC Krukan - Lirarnas Lag</h2>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link href="/">Start</Link>
          </li>
          <li>
            <Link href="/truppen">Spelartrupp</Link>
          </li>
          <li>
            <Link href="/spelschema">Spelschema</Link>
          </li>
          <li>
            <Link href="/tabell">Tabell</Link>
          </li>
          <li>
            <Link href="/">Kontakt</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
