import React, { Fragment } from "react";
import Head from "next/head";
import NewPlayerForm from "../../../components/players/NewPlayerForm";

function RegisterPlayer() {
  return (
    <Fragment>
      <Head>
        <title>Registrera spelare</title>
        {/* no meta tag as this will be admin only */}
      </Head>
      <h2>Registrera ny spelare</h2>
      <NewPlayerForm />
    </Fragment>
  );
}

export default RegisterPlayer;
