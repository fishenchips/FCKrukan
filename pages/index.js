//import Head from "next/head"; // ADDING Head again for future use of metatags etc
import styles from "../styles/Home.module.css";
import { MongoClient } from "mongodb";

export default function Home() {
  /* FIRST TIME PAGE LOADS the array is empty (when sending request to backend),
  Which isnt great for search engine optimization, so we use getStaticProps*/

  return <div className={styles.container}></div>;
}

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
