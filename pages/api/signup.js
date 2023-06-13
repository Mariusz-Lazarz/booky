import { MongoClient } from "mongodb";

export default async function Singup(req, res) {
  try {
    if (req.method === "POST") {
      const { username, email, password, passwordConfirm } = req.body;
      const client = await MongoClient.connect(
        "mongodb+srv://mariusz:dNVw6GaiOdkrnRUx@cluster0.maytivw.mongodb.net/users"
      );
      const db = client.db();

      const usersCollections = db.collection("user");
      usersCollections.insertOne({
        username,
        email,
        password,
        passwordConfirm,
      });
      res.status(201).json({ data: req.body, message: "User registered" });
    } else {
      res.status(400).json({ message: "method not allowed" });
    }
    client.close();
  } catch (error) {
    res.status(400).json({ message: "Error" });
  }
}
