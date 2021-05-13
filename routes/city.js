const router = require("express").Router();
const city = require("../hospital/city");

router.get("/", city.getSiGunGu);

module.exports = router;
