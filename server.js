const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "juuri",
  database: "urheilija3",
});

connection.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to database.");
});

app.get("/urheilija", (req, res) => {
  connection.query("SELECT * FROM urheilijat", (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

app.post("/urheilija", (req, res) => {
  const { nimi, syntymaVuosi, paino, laji, saavutukset, photoUrl } = req.body;
  const sql =
    "INSERT INTO urheilija (nimi, syntymaVuosi, paino, laji, saavutukset, photoUrl) VALUES (?, ?, ?, ?, ?, ?)";
  connection.query(
    sql,
    [nimi, syntymaVuosi, paino, laji, saavutukset, photoUrl],
    (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.json({ id: result.insertId, ...req.body });
    }
  );
});

app.put("/urheilija/:id", (req, res) => {
  const { id } = req.params;
  const { nimi, syntymaVuosi, paino, laji, saavutukset, photoUrl } = req.body;
  const sql =
    "UPDATE urheilija SET nimi = ?, syntymaVuosi = ?, paino = ?, laji = ?, saavutukset = ?, photoUrl = ? WHERE id = ?";
  connection.query(
    sql,
    [nimi, syntymaVuosi, paino, laji, saavutukset, photoUrl, id],
    (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.json({ id, ...req.body });
    }
  );
});

app.delete("/urheilija/:id", (req, res) => {
  const { id } = req.params;
  connection.query(
    "DELETE FROM urheilija WHERE id = ?",
    [id],
    (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.sendStatus(204);
    }
  );
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
