import { MongoClient } from "mongodb";

/* Creating API route function to send query to my mongoDB cluster */

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    /* connecting to DB application, generic username and password for now - wont run on client side*/
    const client = await MongoClient.connect(
      "mongodb+srv://philip:123@firstcluster.zwayv.mongodb.net/?retryWrites=true&w=majority"
    );

    const db = client.db();

    const playerCollection = db.collection("FCKrukan");

    /* insert an object with the needed parameters */
    const result = await playerCollection.insertOne(data);

    console.log(result);

    client.close();

    /* want to send back an result */
    res.status(201).json({ message: "Player Added." });
  }
}

export default handler;
