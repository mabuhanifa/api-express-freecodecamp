const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("application data from get request");
});

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
