import React from "react";
import PlayerDetail from "../../../components/players/PlayerDetail";
import { MongoClient } from "mongodb";
import { APIKey } from "../../../keys/clientKey";

function PlayerPage() {
  return (
    <div>
      <PlayerDetail />
    </div>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(APIKey);

  const db = client.db();

  const playerCollection = db.collection("players");

  /* access to all meetups, we want the ID and no other field values */
  /* first empty object to (first arg is filter criteria), we want to find all field values */
  /* second {} for what fields should be extracted, standard is all values are used , 
  but we only want id
    _id: 1 === only include the id, nothing else
    need toArray() to convert to JS array of objects*/
  const players = await playerCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    /* any path that isnt included below till show 404 (if false) */
    fallback: "blocking",
    /* generating dynamic paths */
    paths: players.map((player) => ({
      params: {
        playerId: player._id.toString(),
      },
    })),
  };
}

export default PlayerPage;
