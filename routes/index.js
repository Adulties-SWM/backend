const express = require("express");
const router = express.Router();

const detail = require("./detail.js");

router.use("/detail", detail);

module.exports = router;
