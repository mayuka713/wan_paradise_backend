import { Sequelize } from "sequelize";
import TagFactory from "./Tag";
import StoreTagFactory from "./StoreTags";



const connectionString =
  process.env.DATABASE_URL ||
  `postgres://${process.env.DB_USER || "local_user"}:${process.env.DB_PASSWORD || "local_pass"}@${
    process.env.DB_HOST || "localhost"
  }:5432/${process.env.DB_NAME || "local_db"}`;

const sequelize = new Sequelize(connectionString, {
  dialect: "postgres",
  logging: false,
});


sequelize
  .authenticate()
  .then(() => console.log("データベースに接続成功"))
  .catch((error) => console.error("データベース接続エラー:", error));

const Tag = TagFactory(sequelize);
const StoreTag = StoreTagFactory(sequelize);

export { sequelize, Tag, StoreTag,  };
