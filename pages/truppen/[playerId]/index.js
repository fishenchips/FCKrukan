import React, { Fragment } from "react";
import PlayerSinglePage from "../../../components/players/PlayerSinglePage";
import { MongoClient, ObjectId } from "mongodb";
import { APIKey } from "../../../keys/clientKey";
import Head from "next/head";

function PlayerPage(props) {
  return (
    <Fragment>
      <Head>
        <title>
          {props.playerData.firstName} {props.playerData.lastName}
        </title>
        <meta
          name="description"
          content={
            props.playerData.firstName +
            " " +
            props.playerData.lastName +
            ", " +
            "FC Krukan."
          }
        />
      </Head>

      {/* need to send to PlayerPage directly - 
      getStaticProps returns props object with playerData object inside */}
      <PlayerSinglePage
        firstName={props.playerData.firstName}
        lastName={props.playerData.lastName}
        image={props.playerData.image}
        year={props.playerData.year}
        position={props.playerData.position}
        foot={props.playerData.foot}
        parentClub={props.playerData.parentClub}
      />
    </Fragment>
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

/* since its dynamic, it needs to pre generate all dynamic pages */
export async function getStaticProps(context) {
  /* Fetch data for single meetup */
  const playerId = context.params.playerId;

  const client = await MongoClient.connect(APIKey);

  const db = client.db();

  const playerCollection = db.collection("players");

  const selectedPlayer = await playerCollection.findOne({
    _id: ObjectId(playerId), //converts the id string value to MongoDb ObjectId to find the right player
  });

  client.close();

  return {
    props: {
      playerData: {
        id: selectedPlayer._id.toString(), // converting back to string
        firstName: selectedPlayer.firstName,
        lastName: selectedPlayer.lastName,
        image: selectedPlayer.image,
        year: selectedPlayer.year,
        position: selectedPlayer.position,
        foot: selectedPlayer.foot,
        parentClub: selectedPlayer.parentClub,
      },
    },
  };
}

export default PlayerPage;
