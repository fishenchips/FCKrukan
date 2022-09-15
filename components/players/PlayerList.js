import React from "react";
import PlayerDetail from "./PlayerDetail";

function PlayerList(props) {
  return (
    <section>
      <ul>
        {props.playersList.map((player) => (
          <PlayerDetail
            key={player.id}
            id={player.id}
            firstName={player.firstName}
            lastName={player.lastName}
            image={player.image}
            year={player.year}
            position={player.position}
            foot={player.foot}
            parentClub={player.parentClub}
          />
        ))}
      </ul>
    </section>
  );
}

export default PlayerList;
