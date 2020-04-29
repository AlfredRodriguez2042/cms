import { Model, DataTypes } from 'sequelize'

const { UUID, UUIDV4, TEXT } = DataTypes

class Reply extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: UUID,
          primaryKey: true,
          defaultValue: UUIDV4(),
        },
        content: { type: TEXT, allowNull: false },
      },
      {
        sequelize,
      }
    )
  }

  static associate(models) {
    this.belongsTo(models.User)
  }
}
export default Reply
