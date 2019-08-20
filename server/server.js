const path = require("path");
const publicPath = path.join(__dirname, "../public");

const express = require("express");

const app = express();

app.use(express.static(publicPath));

app.get("/", (req, res) => {
  res.send(publicPath + "index.html");
});

const port = process.env.PORT || 3000;
app.listen(port, err => {
  if (err) throw err;

  console.log(`server started at port ${port}`);
});
