import dotenv from "dotenv";
import { Sequelize } from "sequelize";
dotenv.config();

const db = new Sequelize(
  "node",
  process.env.USER_DB || "root",
  process.env.PASSWORD_DB || "test",
  {
    host: process.env.HOST_DB || "localhost",
    dialect: "mysql",
    //loggin: false
  }
);

export default db;
