import { Model, DataTypes } from 'sequelize'
const { UUID, UUIDV4, ENUM, STRING } = DataTypes

class Role extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: UUID,
          primaryKey: true,
          defaultValue: UUIDV4()
        },
        name: {
          type: ENUM,
          values: ['user', 'admin', 'disabled'],
          allowNull: false,
          defaultValue: 'user'
        }
      },
      {
        sequelize
      }
    )
  }
  static associate(models) {
    this.belongsToMany(models.User, {
      foreignKey: {
        name: 'roleId',
        field: 'role_id'
      },

      through: 'user_role',
      as: 'user',
      onUpdate: 'CASCADE'
    })
  }
}
export default Role
