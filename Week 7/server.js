const express = require("express");
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

const MONGO_URI =
  "mongodb+srv://ankur23bce7555_db_user:ankur123@labcluster.5gvihuq.mongodb.net/?appName=LabCluster";
const DB_NAME = "week7_lab";

let db;

async function connectDB() {
  const client = new MongoClient(MONGO_URI);
  await client.connect();
  db = client.db(DB_NAME);
  console.log("Connected to MongoDB");
}

// ========================
// Question 1 — Notes CRUD
// ========================

// Create note
app.post("/notes", async (req, res) => {
  try {
    const { title, subject, description } = req.body;
    const doc = {
      title,
      subject,
      description,
      created_date: new Date().toISOString().split("T")[0],
    };
    const result = await db.collection("notes").insertOne(doc);
    res.json({ ...doc, _id: result.insertedId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Read all notes
app.get("/notes", async (_req, res) => {
  try {
    const notes = await db.collection("notes").find().toArray();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update note
app.put("/notes/:id", async (req, res) => {
  try {
    const { title, subject, description } = req.body;
    const update = {};
    if (title !== undefined) update.title = title;
    if (subject !== undefined) update.subject = subject;
    if (description !== undefined) update.description = description;

    await db
      .collection("notes")
      .updateOne({ _id: new ObjectId(req.params.id) }, { $set: update });
    res.json({ message: "Note updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete note
app.delete("/notes/:id", async (req, res) => {
  try {
    await db
      .collection("notes")
      .deleteOne({ _id: new ObjectId(req.params.id) });
    res.json({ message: "Note deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ========================
// Question 2 — Books
// ========================

// Search books by title (regex, case-insensitive)
app.get("/books/search", async (req, res) => {
  try {
    const title = req.query.title || "";
    const books = await db
      .collection("books")
      .find({ title: { $regex: title, $options: "i" } })
      .toArray();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Top rated books (rating >= 4, limit 5)
app.get("/books/top", async (_req, res) => {
  try {
    const books = await db
      .collection("books")
      .find({ rating: { $gte: 4 } })
      .limit(5)
      .toArray();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Sort books by field (price or rating)
app.get("/books/sort/:field", async (req, res) => {
  try {
    const field = req.params.field;
    const order = field === "rating" ? -1 : 1;
    const sortObj = {};
    sortObj[field] = order;
    const books = await db.collection("books").find().sort(sortObj).toArray();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Filter books by category
app.get("/books/category/:cat", async (req, res) => {
  try {
    const books = await db
      .collection("books")
      .find({ category: { $regex: `^${req.params.cat}$`, $options: "i" } })
      .toArray();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all books with pagination
app.get("/books", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 5;
    const skip = (page - 1) * limit;
    const total = await db.collection("books").countDocuments();
    const books = await db
      .collection("books")
      .find()
      .skip(skip)
      .limit(limit)
      .toArray();
    res.json({ books, page, totalPages: Math.ceil(total / limit), total });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Seed sample books (utility endpoint)
app.post("/books/seed", async (_req, res) => {
  try {
    const count = await db.collection("books").countDocuments();
    if (count > 0) return res.json({ message: "Books already seeded" });

    const sample = [
      {
        title: "JavaScript Essentials",
        author: "John Smith",
        category: "Programming",
        price: 450,
        rating: 4.5,
        year: 2023,
      },
      {
        title: "Python for Data Science",
        author: "Jane Doe",
        category: "Data Science",
        price: 520,
        rating: 4.7,
        year: 2022,
      },
      {
        title: "MongoDB in Action",
        author: "Kyle Banker",
        category: "Database",
        price: 380,
        rating: 4.2,
        year: 2021,
      },
      {
        title: "HTML & CSS Design",
        author: "Jon Duckett",
        category: "Web Design",
        price: 300,
        rating: 4.8,
        year: 2020,
      },
      {
        title: "Node.js Patterns",
        author: "Mario Casciaro",
        category: "Programming",
        price: 490,
        rating: 4.3,
        year: 2023,
      },
      {
        title: "React Up & Running",
        author: "Stoyan Stefanov",
        category: "Programming",
        price: 410,
        rating: 3.9,
        year: 2022,
      },
      {
        title: "Database Internals",
        author: "Alex Petrov",
        category: "Database",
        price: 560,
        rating: 4.6,
        year: 2021,
      },
      {
        title: "Learning SQL",
        author: "Alan Beaulieu",
        category: "Database",
        price: 350,
        rating: 4.1,
        year: 2020,
      },
      {
        title: "Data Structures in C",
        author: "Reema Thareja",
        category: "Programming",
        price: 280,
        rating: 3.8,
        year: 2019,
      },
      {
        title: "Artificial Intelligence",
        author: "Stuart Russell",
        category: "Data Science",
        price: 700,
        rating: 4.9,
        year: 2023,
      },
      {
        title: "Clean Code",
        author: "Robert C. Martin",
        category: "Programming",
        price: 430,
        rating: 4.7,
        year: 2018,
      },
      {
        title: "Web Development with Go",
        author: "Jon Calhoun",
        category: "Web Design",
        price: 390,
        rating: 4.0,
        year: 2022,
      },
    ];
    await db.collection("books").insertMany(sample);
    res.json({ message: "Seeded 12 sample books" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start server
const PORT = 3000;
connectDB().then(() => {
  app.listen(PORT, () =>
    console.log(`Server running at http://localhost:${PORT}`),
  );
});
