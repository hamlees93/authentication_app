const express = require("express");
const router = express.Router();
const PageController = require(`./../controllers/page_controller`);
const AuthenticationController = require(`./../controllers/authentication_controller`)

router.get('/', PageController.index);

router.get(`/login`, AuthenticationController);

module.exports = router;