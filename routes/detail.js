const router = require("express").Router();
const detail = require("../controllers/detail");

router.get("/detail", detail.getDetail);

module.exports = router;
