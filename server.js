const express = require("express");
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

const PORT = 3001;
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// routes
app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
