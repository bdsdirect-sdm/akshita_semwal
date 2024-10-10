"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const SequelizeConnection_1 = __importDefault(require("../config/SequelizeConnection"));
const Address = SequelizeConnection_1.default.define("address", {
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: true
    },
    comp_add: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    comp_city: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    comp_state: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    comp_zip: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    home_add: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    home_city: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    home_state: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    home_zip: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    appt_letter: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    }
});
exports.default = Address;
