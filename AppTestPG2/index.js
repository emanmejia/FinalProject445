const express = require("express");

// Declare the node-postgres module
const { Pool } = require("pg");

// Connection to SQL database
const pool = new Pool({
  user: "mystery",
  host: "xxxxx.elephantsql.com",
  database: "mystery",
  password: "asecretthingthatnoonehastosee",
  port: 5432
});
console.log("Successful connection to the database");

// Creating the Express server
const app = express();

// Server configuration
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));

// Server initialization
app.listen(5001, () => {
  console.log("Server started (http://localhost:5001/) !");
});

// Get /
app.get("/", (req, res) => {
  res.render("index");
});

// Get /about
app.get("/about", (req, res) => {
  res.render("about");
});

// Get /data
app.get("/data", (req, res) => {
  const test = {
    title: "Test",
    items: ["one", "two", "three"]
  };
  res.render("data", { model: test });
});

