"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.addUser = void 0;
const address_model_1 = __importDefault(require("../models/address.model"));
const user_model_1 = __importDefault(require("../models/user.model"));
const mailSender_1 = __importDefault(require("../utils/mailSender"));
const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { lname, fname, email } = req.body;
        const filesData = req.files;
        // const { profile_photo } = filesData.profile_photo[0].path;
        // console.log(req.body)
        console.log("FILES::::::::::::::", filesData);
        console.log("BODY:::::", req.body);
        const user = yield user_model_1.default.create({
            fname: fname,
            lname: lname,
            email: email,
            profile_photo: filesData.profile_photo[0].path
        });
        // console.log("USER::::::::::", user);filesData
        const userId = user.id;
        const { comp_add, comp_city, comp_state, comp_zip, home_add, home_city, home_state, home_zip } = req.body;
        // const { appt_letter } = filesData.appt_letter[0].path;
        const address = yield address_model_1.default.create({
            user_id: userId,
            comp_add: comp_add,
            comp_city: comp_city,
            comp_state: comp_state,
            comp_zip: comp_zip,
            home_add: home_add,
            home_city: home_city,
            home_state: home_state,
            home_zip: home_zip,
            appt_letter: filesData.appt_letter[0].path
        });
        // console.log("ADDRESS::::::::::::", address)
        (0, mailSender_1.default)(user.email, user.fname, comp_city);
        return res.status(201).json({ user, address });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "An error occurred while creating the user and address",
            error
        });
    }
});
exports.addUser = addUser;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const user = yield user_model_1.default.findByPk(id).then((user) => {
            res.json(user);
        });
        if (user) {
            const address = yield address_model_1.default.findOne({
                where: { id: user.id },
                include: [{ model: address_model_1.default }]
            }).then((address) => {
                res.json(address);
            });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
});
exports.getUser = getUser;
