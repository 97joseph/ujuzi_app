const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const port = 5000;

// Example JSON response
const response = {
  status: "success",
  data: [
    { id: 1, name: "John Doe", email: "john.doe@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", role: "User" },
  ],
};

// API endpoint
app.get("/api/users", (req, res) => {
  res.json(response);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
