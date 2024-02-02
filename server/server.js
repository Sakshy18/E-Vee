// app.use(express.json());
// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "signup",
// });

const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ashutosh",
  database: "evee",
});

app.post("/signup", (req, res) => {
  const { username, password } = req.body;

  // Validate inputs here if needed

  const sql = "INSERT INTO login (username, password) VALUES (?, ?)";
  const values = [username, password];

  db.query(sql, values, (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.status(201).json({ message: "User created successfully" });
  });
});

app.listen(8081, () => {
  console.log("Server is running on port 8081");
});
