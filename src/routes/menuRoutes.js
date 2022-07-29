const express = require("express");
const router = express.Router();

const controller = require("../controller/menuController");

router.get("/all", controller.getAll);

router.post("/create", controller.createMenu);

router.patch("/update/:id", controller.updateMenu);

router.delete("/delete/:id", controller.deleteMenu);

router.get("/menu/:id", controller.getById);

module.exports = router;
