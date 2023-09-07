const express = require("express");
const app = express();
const dotenv = require("dotenv");
const port = 8080;

app.use(express.json());

dotenv.config({ path: "./.env" });

require("./db/conn");

app.use(require("./routes/company"));

app.use(require("./routes/driver"));

app.get("/", (req, res) => {
  console.log("Hi");
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
