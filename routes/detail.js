const router = require("express").Router();
const detail = rrequire("../controllers/detail");

router.get("/detail", detail.getDetail);

module.exports = router;
