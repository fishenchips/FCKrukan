import React from "react";

function PlayerList(props) {
  return (
    <section>
      {props.playersList.map((player) => (
        <div key={player.id}>
          <p>{player.lastName}</p>
          <p>{player.firstName}</p>
        </div>
      ))}
    </section>
  );
}

export default PlayerList;
