const express = require("express");

// Express setup
const app = express();
const PORT = 5001;

app.get("/", (req, res) => {
  console.log("working");
});

// Middleware
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`server running on PORT:${PORT}`);
});
