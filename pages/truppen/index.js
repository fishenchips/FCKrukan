import React from "react";
import Link from "next/link";

function SquadPage() {
  return (
    <React.Fragment>
      <h5>Spelartrupp</h5>
      <nav>
        <ul>
          <li>
            <Link href="/truppen/ny-spelare">Registera spelare</Link>
          </li>
          <li>
            <Link href="/truppen/hej">as</Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default SquadPage;
