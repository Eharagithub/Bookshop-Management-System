const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB configuration
const uri = "mongodb+srv://book-store:GDtt0109@cluster0.bfzi5ks.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect(); // Connect to MongoDB

    // Create a collection for books
    const bookCollection = client.db("bookInventory").collection("books");

    // POST endpoint to upload a book
    app.post("/upload-book", async (req, res) => {
      const data = req.body; // Assuming req.body is an array of book objects
      console.log(data); // Log the received data to check its format

      const result = await bookCollection.insertMany(data); // Insert the received data into MongoDB
      res.send(result);
    });

    // GET all books from database
    app.get("/all-books", async (req, res) => {
      const books = await bookCollection.find().toArray(); // Await the find operation and convert to array
      res.send(books);
    });

    // Update a book data; patch or update methods
    app.patch("/book/:id", async (req, res) => {
      const id = req.params.id;
      const updateBookData = req.body;
      const filter = { _id: new ObjectId(id) };
  
      const updateDoc = {
        $set: { ...updateBookData }
      };
      const options = { upsert: true };

      // Update
      const result = await bookCollection.updateOne(filter, updateDoc, options);
      res.send(result);
    });

    // Start the Express server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

run().catch(console.error);
