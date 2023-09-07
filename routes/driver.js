const express = require("express");

const controller = require("../controllers/driver");

const router = express.Router();

router.get("/driver", controller.getDriver);

router.post("/driver", controller.postDriver);

router.get("/driver/:id", controller.getDriverid);

// router.put("/driver/:id", controller.updateDriver);

// router.delete("/driver/:id", controller.deleteDriver);

module.exports = router;
