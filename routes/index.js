const express = require("express");
const router = express.Router();

const detail = require("./detail.js");
const info = require('./info');

router.use("/detail", detail);
router.use('/info', info);

module.exports = router;
