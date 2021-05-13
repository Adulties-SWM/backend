const router = require("express").Router();
const infoController = require("../controllers/info");
const city = require("../hospital/city");

router.get("/position", infoController.getHospitalListFromPosition);

router.get("/city", city.getSiGunGu);

module.exports = router;
