"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const fs_1 = __importDefault(require("fs"));
const storage = multer_1.default.diskStorage({
    destination: (_req, file, cb) => {
        const dir = "upload";
        if (!fs_1.default.existsSync(dir)) {
            fs_1.default.mkdirSync(dir);
        }
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        const name = Date.now() + file.originalname;
        // console.log("name:::::::::::",name)
        cb(null, name);
    }
});
const upload = (0, multer_1.default)({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.fieldname == "profile_photo") {
            if (file.mimetype === "image/jpeg" || file.mimetype === " image/jpg" || file.mimetype === "image/png") {
                cb(null, true);
            }
            else {
                cb(null, false);
                new Error("Enter image file");
            }
        }
        if (file.fieldname == "appt_letter") {
            if (file.mimetype === "application/pdf") {
                cb(null, true);
            }
            else {
                cb(null, false);
                new Error("Enter pdf file");
            }
        }
    }
});
exports.default = upload;
