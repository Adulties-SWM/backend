const router = require("express").Router();
const infoController = require("../controllers/info");

router.get("/position", infoController.getHospitalListFromPosition);

module.exports = router;
