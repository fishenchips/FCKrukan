import React from "react";
import Link from "next/link";

function MainNavigation() {
  return (
    <header>
      <div>
        <h1>Välkommna till FC Krukan - Lirarnas Lag</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/">Start</Link>
          </li>
          <li>
            <Link href="/truppen">Spelartrupp</Link>
          </li>
          <li>
            <Link href="/spelschema">Start</Link>
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
