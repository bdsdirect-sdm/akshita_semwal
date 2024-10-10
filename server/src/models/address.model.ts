import { DataTypes } from "sequelize";
import sequelize from "../config/SequelizeConnection";

const Address = sequelize.define("address", {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
    },
    comp_add: {
        type: DataTypes.STRING,
        allowNull: true
    },
    comp_city: {
        type: DataTypes.STRING,
        allowNull: true
    },
    comp_state: {
        type: DataTypes.STRING,
        allowNull: true
    },
    comp_zip: {
        type: DataTypes.STRING,
        allowNull: true
    },
    home_add: {
        type: DataTypes.STRING,
        allowNull: true
    },
    home_city: {
        type: DataTypes.STRING,
        allowNull: true
    },
    home_state: {
        type: DataTypes.STRING,
        allowNull: true
    },
    home_zip: {
        type: DataTypes.STRING,
        allowNull: true
    },
    appt_letter: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

export default Address;