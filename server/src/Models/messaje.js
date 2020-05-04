import { Model, DataTypes } from 'sequelize'

const { UUID, UUIDV4, STRING } = DataTypes

class Message extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: UUID,
          primaryKey: true,
          defaultValue: UUIDV4(),
        },
        content: {
          type: STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
      }
    )
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'users',
    })
    this.belongsTo(models.Channel, {
      foreignKey: 'channel_id',
      as: 'channels',
    })
  }
}
export default Message
