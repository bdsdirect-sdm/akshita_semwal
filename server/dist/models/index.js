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
const SequelizeConnection_1 = __importDefault(require("../config/SequelizeConnection"));
const address_model_1 = __importDefault(require("./address.model"));
const user_model_1 = __importDefault(require("./user.model"));
user_model_1.default.hasOne(address_model_1.default, {
    foreignKey: "user_id"
});
address_model_1.default.belongsTo(user_model_1.default, {
    foreignKey: "id"
});
function serverInitialize() {
    return __awaiter(this, void 0, void 0, function* () {
        SequelizeConnection_1.default.sync()
            .then(() => {
            console.log("Table synced!");
        });
    });
}
exports.default = serverInitialize;
