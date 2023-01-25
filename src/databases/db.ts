import { DataSource } from "typeorm";
import { DB_HOST, DB_USER, DB_PORT,DB_PASSWORD, DB_DATABASE } from '../config/config';
import Category from "../entities/Category";
import Color from "../entities/Color";
import Person from "../entities/Person";
import Roles from "../entities/Roles";
import Size from "../entities/Size";
import Brand from "../entities/Brand";
import Provider from "../entities/Provider";
import PaymentMethod from "../entities/PaymentMethod";

import Products from "../entities/PaymentMethod";

import Styles from "../entities/Styles";

const PORT:any=DB_PORT
export const AppDataSource = new DataSource({
  type: "mysql",
  host: DB_HOST,
  port: PORT,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  // synchronize: true,
  logging: false,
  entities: [Roles,Person,Category,Size,Color,Brand,Provider,PaymentMethod,Styles],
  subscribers: [],
  migrations: [],
});
