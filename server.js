const express = require("express");

// local Modules
const homeRoutes = require("./routes/homeRoutes");

// Express setup
const app = express();
const PORT = 5001;

// Middleware
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/public/images/", express.static("./public/images"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.use("/", homeRoutes);

app.listen(PORT, () => {
  console.log(`server running on PORT:${PORT}`);
});
