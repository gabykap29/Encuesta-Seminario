import {Sequelize, Model, DataTypes} from 'sequelize';

dotenv.config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host:process.env.DB_HOST,
        dialect:process.env.DB_DIALECT || 'mysql',
        define:{
            timestamps:false
        },
    },
);

export  {sequelize, Model, DataTypes}