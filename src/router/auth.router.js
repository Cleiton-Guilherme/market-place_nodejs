const router = require("express").Router();
//const authController = require("")

router.post("/login", authController.loginController);

module.exports = router;