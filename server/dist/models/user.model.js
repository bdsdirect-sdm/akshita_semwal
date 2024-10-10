"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const SequelizeConnection_1 = __importDefault(require("../config/SequelizeConnection"));
const User = SequelizeConnection_1.default.define("user", {
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    fname: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    lname: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    profile_photo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    }
});
exports.default = User;
