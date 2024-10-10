// import { check, validationResult } from 'express-validator';
import { check, validationResult } from "express-validator"

export const addNewUser = [
    check("lname")
        .not()
        .isEmpty()
        .withMessage("Last Name is required"),
    
    check("fname")
        .not()
        .isEmpty()
        .withMessage("First Name is required"),
    
    check("email")
        .isEmail()
        .withMessage("Valid email is required")
        .not()
        .isEmpty()
        .withMessage("Email is required"),
    
    // check("profile_photo")
    //     .not()
    //     .isEmpty()
    //     .withMessage("Profile photo is required"),
    
    check("comp_add")
        .not()
        .isEmpty()
        .withMessage("Company address is required"),
    
    check("home_add")
        .not()
        .isEmpty()
        .withMessage("Home address is required"),


    (req: any, res: any, next: any) => {
        validateUser(req, res, next)
    }    
];

export const validateUser = (req: any, res: any, next: any) => {
    const errors = validationResult(req);
    const err = errors.array();
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: err });
    }
    next();
};
