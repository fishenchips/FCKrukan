import React, { Fragment } from "react";
import Head from "next/head";
import NewPlayerForm from "../../../components/players/NewPlayerForm";

function RegisterPlayer() {
  /* adding a player to DB */
  const addPlayerHandler = async (enteredPlayerData) => {
    /* send request to API route, which triggers that function */
    const response = await fetch("/api/ny-spelare", {
      method: "POST",
      body: JSON.stringify(enteredPlayerData), //which is what we send up from function in NewPlayerForm.js
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();

    console.log(data);
  };

  return (
    <Fragment>
      <Head>
        <title>Registrera spelare</title>
        {/* no meta tag as this will be admin only */}
      </Head>
      <h2>Registrera ny spelare</h2>
      <NewPlayerForm onAddPlayer={addPlayerHandler} />
    </Fragment>
  );
}

export default RegisterPlayer;
