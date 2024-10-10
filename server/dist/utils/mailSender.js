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
const MailConnection_1 = __importDefault(require("../config/MailConnection"));
const ejs_1 = __importDefault(require("ejs"));
const sendMail = (sendMailTo, name, emailSubject) => __awaiter(void 0, void 0, void 0, function* () {
    // const templatePath = path.join(__dirname, "temp.ejs");
    // const data = await ejs.renderFile(__dirname + "/test.ejs", { name: 'Stranger' });
    try {
        const htmlContent = yield ejs_1.default.renderFile("src/utils/temp.ejs", { name });
        const info = yield MailConnection_1.default.sendMail({
            from: "dipchip1702@gmail.com",
            to: sendMailTo,
            subject: emailSubject,
            html: htmlContent
        });
        console.log("Email sent: ", info.messageId);
    }
    catch (error) {
        console.error("Error sending email: ", error);
    }
});
exports.default = sendMail;
