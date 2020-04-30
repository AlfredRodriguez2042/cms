import { Model, DataTypes } from 'sequelize'

const { UUID, UUIDV4, INTEGER, STRING } = DataTypes

class Channel extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: UUID,
          primaryKey: true,
          defaultValue: UUIDV4(),
        },
        name: {
          type: STRING,
          allowNull: false,
        },
        membersCount: {
          type: INTEGER,
          defaultValue: 0,
        },
      },
      {
        sequelize,
      }
    )
  }

  static associate(models) {
    this.hasMany(models.User, {
      foreignKey: {
        name: 'channelId',
        field: 'channel_id',
      },
      as: 'channel',
    })
    this.belongsTo(models.Message, {
      foreignKey: {
        name: 'channelId',
        field: 'channel_id',
      },
      as: 'channel',
    })
  }
}
export default Channel
