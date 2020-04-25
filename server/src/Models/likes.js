import { Model, DataTypes } from 'sequelize'
const { UUID, UUIDV4, TEXT } = DataTypes

class Likes extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: UUID,
          primaryKey: true,
          defaultValue: UUIDV4(),
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
      as: 'user',
    }),
      this.belongsTo(models.Article)
  }
}
export default Likes
