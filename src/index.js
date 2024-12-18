const express = require("express");
const bodyParser = require("body-parser");
const urlRoutes = require("./routes/urlRoutes");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api", urlRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
