const fs = require("fs");
const db = require("../db/db.json");

const router = require("express").Router();

router.get("/api/notes", (request, response) => {
  response.json(db);
});

module.exports = router;
