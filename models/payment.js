'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      payment.belongsTo(models.User, { foreignKey: 'user_id' });
      payment.hasMany(models.Booking, { foreignKey: 'payment_id' });
    }
  }
  payment.init({
    payment_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    total_amount: {
      type: DataTypes.INTEGER
    },
    transaction_token: {
      type: DataTypes.STRING
    },
    transaction_id: {
      type: DataTypes.STRING
    },
    payment_callback_data: {
      type: DataTypes.TEXT
    },
    payment_method: {
      type: DataTypes.STRING
    },
    payment_date: {
      type: DataTypes.DATE
    },
    payment_status: {
      type: DataTypes.ENUM("completed", "cancelled", "pending", "failed")
    },
    user_id: {
      type: DataTypes.UUID,
    },
  }, {
    sequelize,
    modelName: 'payment',
    tableName: 'Payments', // Specify the actual table name in the database
  });
  return payment;
};