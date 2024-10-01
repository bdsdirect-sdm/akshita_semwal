"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = require("../controllers/userController");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post("/signup", userController_1.createUser);
router.get("/profile", userController_1.getProfile);
router.post("/login", userController_1.userLogin);
exports.default = router;
