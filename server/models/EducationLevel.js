import { sequelize, DataTypes } from "../../database/db.js";

export const EducationLevel = sequelize.define('EducationLevel',{
    id_education_level:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false,
    },
},{
    sequelize,
    paranoid:true,
    tableName:'EducationLevel',
    modelName:'EducationLevel',
});
