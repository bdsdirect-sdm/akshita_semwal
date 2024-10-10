"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("../controllers/user.controller");
const express_1 = require("express");
const multer_middleware_1 = __importDefault(require("../middleware/multer.middleware"));
const userForm_validator_1 = require("../validator/userForm.validator");
const router = (0, express_1.Router)();
router.post("/add", multer_middleware_1.default.fields([
    { name: "profile_photo", maxCount: 1 },
    { name: "appt_letter", maxCount: 1 }
]), userForm_validator_1.addNewUser, user_controller_1.addUser);
router.get("/get/:id", user_controller_1.getUser);
exports.default = router;
