"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = exports.addNewUser = void 0;
// import { check, validationResult } from 'express-validator';
const express_validator_1 = require("express-validator");
exports.addNewUser = [
    (0, express_validator_1.check)("lname")
        .not()
        .isEmpty()
        .withMessage("Last Name is required"),
    (0, express_validator_1.check)("fname")
        .not()
        .isEmpty()
        .withMessage("First Name is required"),
    (0, express_validator_1.check)("email")
        .isEmail()
        .withMessage("Valid email is required")
        .not()
        .isEmpty()
        .withMessage("Email is required"),
    // check("profile_photo")
    //     .not()
    //     .isEmpty()
    //     .withMessage("Profile photo is required"),
    (0, express_validator_1.check)("comp_add")
        .not()
        .isEmpty()
        .withMessage("Company address is required"),
    (0, express_validator_1.check)("home_add")
        .not()
        .isEmpty()
        .withMessage("Home address is required"),
    (req, res, next) => {
        (0, exports.validateUser)(req, res, next);
    }
];
const validateUser = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    const err = errors.array();
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: err });
    }
    next();
};
exports.validateUser = validateUser;
