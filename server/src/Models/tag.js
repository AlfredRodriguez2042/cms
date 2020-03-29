import { Model, DataTypes } from 'sequelize'
const { UUID, UUIDV4, STRING, TEXT, INTEGER, ENUM } = DataTypes

class Tag extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: UUID,
          defaultValue: UUIDV4,
          primaryKey: true
        },
        name: {
          type: STRING,
          allowNull: false
        }
      },
      {
        sequelize
      }
    )
  }
  static associate(models) {
    this.belongsTo(models.Article)
  }
}
export default Tag
