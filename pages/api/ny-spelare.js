import { MongoClient } from "mongodb";
import { APIKey } from "../../keys/clientKey";

/* Creating API route function to send query to my mongoDB cluster */

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    /* connecting to DB application, generic username and password for now - wont run on client side*/
    const client = await MongoClient.connect(
      /* adding FCKrukan to connect to right DB inside the cluster */
      APIKey
    );

    const db = client.db();

    /* players is the collection name within the FCKrukan DB */
    const playerCollection = db.collection("players");

    /* insert an object with the needed parameters */
    const result = await playerCollection.insertOne(data);

    console.log(result);

    client.close();

    /* want to send back an result */
    res.status(201).json({ message: "Player Added." });
  }
}

export default handler;
