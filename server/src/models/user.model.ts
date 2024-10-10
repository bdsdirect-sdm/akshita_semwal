import { DataTypes } from "sequelize";
import sequelize from "../config/SequelizeConnection";

const User = sequelize.define("user", {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    fname: {
        type: DataTypes.STRING,
        allowNull: true
    },
    lname: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    profile_photo: {
        type: DataTypes.STRING,
        allowNull: true
    }
})

export default User;