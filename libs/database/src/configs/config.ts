import { SequelizeOptions } from "sequelize-typescript";

export const DB_CONNECTION_NAME_SHOPPING_MALL = "shopping-mall";
export const SHOPPING_MALL_DB_CONFIG: SequelizeOptions = {
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "1234",
  database: DB_CONNECTION_NAME_SHOPPING_MALL,
};
