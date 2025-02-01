import { Sequelize, DataTypes, Model } from 'sequelize';

module.exports = (sequelize: Sequelize) => {
  const Review = sequelize.define('Review', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    store_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Stores', // 関連するテーブル名（正しいか確認！）
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: true, // createdAt と updatedAt を自動的に管理
  });

  return Review;
};
