const express = require("express");
const path = require("path"); // You'll still need path for static files if 'public' is relative


const app = express();

app.set("view engine", "ejs");


app.listen(5001, () => {
  console.log("Server started (http://localhost:5001/) !");
});


app.get("/", (req, res) => {
  res.render("index");
});

// For static files, if 'public' is relative to your script, keep path.join(__dirname, "public")
// If 'public' is also at a fixed absolute path like 'views', you'd set it similarly.
app.use(express.static(path.join("C:/users/mejia/documents/FinalProject445/APPTESTPG/", "public")));