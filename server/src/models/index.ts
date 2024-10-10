import sequelize from "../config/SequelizeConnection";
import Address from "./address.model";
import User from "./user.model";

User.hasOne(Address,{
    foreignKey: "user_id" as "address"
})

Address.belongsTo(User,{
    foreignKey: "id" as "user"
})

async function serverInitialize(){
    sequelize.sync()
    .then(() => {
        console.log("Table synced!");
    })
}

export default serverInitialize;