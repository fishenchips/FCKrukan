import React, { Fragment } from "react";
import NewPlayerForm from "../../../components/players/NewPlayerForm";

function RegisterPlayer() {
  return (
    <Fragment>
      <h2>Registrera ny spelare</h2>
      <NewPlayerForm />
    </Fragment>
  );
}

export default RegisterPlayer;
