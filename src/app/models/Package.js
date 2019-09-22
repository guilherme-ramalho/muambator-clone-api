import Sequelize, { Model } from "sequelize";
import Category from "./Category";

class Package extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        code: Sequelize.STRING
      },
      {
        sequelize
      }
    );

    return this;
  }
}

Package.hasOne(Category);

export default Package;
