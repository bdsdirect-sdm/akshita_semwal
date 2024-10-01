import sequelize from "../config/SequelizeConnection";

async function serverInitialize(){
    sequelize.sync()
    .then(() => {
        console.log("Table synced!");
    })
}

export default serverInitialize;