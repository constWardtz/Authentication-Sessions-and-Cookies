const router = require("express").Router();
const { dashboard, login, logout, register } = require("../middleware/auth");

router.route("/register").post(register);

router.route("/login").post(login);

router.route("/logout").post(logout);

router.route("/dashboard").post(dashboard);

module.exports = router;
