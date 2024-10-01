"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.deleteUser = exports.updateUser = exports.userLogin = exports.getProfile = exports.createUser = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
const bcrypt = __importStar(require("bcrypt"));
const JWT = __importStar(require("jsonwebtoken"));
const secret = "apple";
const saltRounds = 10;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fname, lname, email, password } = req.body;
    const encryptedPassword = yield bcrypt.hash(password, saltRounds);
    try {
        const user = yield userModel_1.default.create({ fname, lname, email, password: encryptedPassword })
            .then((user) => {
            res.json(user);
        });
    }
    catch (e) {
        console.log("Error: ", e);
    }
});
exports.createUser = createUser;
const getProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    if (!token) {
        return res.status(401).json({ error: "No token provided" });
    }
    try {
        const decoded = JWT.verify(token, secret);
        const userId = decoded.userId;
        const user = yield userModel_1.default.findByPk(userId);
        if (user) {
            res.json(user);
        }
        else {
            res.status(404).json({ error: "User not found" });
        }
    }
    catch (error) {
        console.error("Error fetching profile:", error);
        res.status(500).json({ error: "Something went wrong" });
    }
});
exports.getProfile = getProfile;
const userLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield userModel_1.default.findOne({ where: { email: email } });
        if (user) {
            const pass = yield bcrypt.compare(password, user.dataValues.password);
            if (pass) {
                const token = JWT.sign({ user }, secret);
                res.json(({ "users": user, "token": token }));
                const check = JWT.verify(token, secret);
                console.log("User logged in!", check);
            }
        }
        else {
            res.status(404).json({ error: 'User not found' });
            console.log("No user");
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
});
exports.userLogin = userLogin;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { fname, lname, email, dob, gender, phone } = req.body;
        const user = yield userModel_1.default.findByPk(id);
        if (user) {
            user.dataValues.fname = fname;
            user.dataValues.lname = lname;
            user.dataValues.email = email;
            user.dataValues.dob = dob;
            user.dataValues.gender = gender;
            user.dataValues.phone = phone;
            yield user.save();
            res.json(user);
        }
        else {
            res.status(404).json({ error: 'User not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield userModel_1.default.findByPk(id);
        if (user) {
            yield user.destroy();
            res.json({ message: 'User deleted' });
        }
        else {
            res.status(404).json({ error: 'User not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
});
exports.deleteUser = deleteUser;
