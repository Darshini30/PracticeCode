const express = require("express");
const controller = require("../controllers/company");

const router = express.Router();

router.post("/company", controller.createCompany);

module.exports = router;
