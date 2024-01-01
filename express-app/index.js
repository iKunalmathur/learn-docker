const express = require("express");
const cors = require("cors"); // Import the cors middleware

const app = express();
const port = 4000;

// Use the cors middleware
app.use(cors());

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Define a route to serve the todos data
app.get("/api/todos", (req, res) => {
  const todos = require("./_data/todos.json");
  res.json(todos);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
