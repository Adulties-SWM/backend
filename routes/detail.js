const router = require("express").Router();
const detail = require("../controllers/detail");

router.get("/", detail.getDetail);

module.exports = router;
