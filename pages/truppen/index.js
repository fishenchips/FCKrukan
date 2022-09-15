import React from "react";
import Link from "next/link";
import PlayerList from "../../components/players/PlayerList";
import { MongoClient } from "mongodb";

function SquadPage(props) {
  return (
    <React.Fragment>
      <h5>Spelartrupp</h5>
      <PlayerList playersList={props.players} />
      <nav>
        <ul>
          <label>Admin</label>
          <li>
            <Link href="/truppen/ny-spelare">Registera spelare</Link>
          </li>
          <li>
            <Link href="/truppen/redigera-spelare">Redigera spelare</Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default SquadPage;

/* nextJS looks for this first - preparing props, waiting for data is loaded and then renders */
/* Code will only run in build process and not on the client side */
export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://philip:123@firstcluster.zwayv.mongodb.net/FCKrukan?retryWrites=true&w=majority"
  );

  const db = client.db();

  const playerCollection = db.collection("players");

  const players = await playerCollection.find().toArray();

  client.close();

  /* always return an object */
  return {
    props: {
      /* need to change players data because of id in DB is an ObjectId */
      players: players.map((player) => ({
        firstName: player.firstName,
        lastName: player.lastName,
        image: player.image,
        year: player.year,
        position: player.position,
        foot: player.foot,
        parentClub: player.parentClub,
        id: player._id.toString(),
      })),
    },
    revalidate: 10 /* number of seconds nextJS will wait for an incoming request
    meaning page will be generated every couple of seconds on the server, if there are requests 
    coming in - and replace the old generated site*/,
  };
}
