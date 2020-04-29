import { Model, DataTypes } from 'sequelize'

const { UUID, UUIDV4, STRING } = DataTypes

class Category extends Model {
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
      },
      {
        sequelize,
      }
    )
  }

  static associate(models) {
    this.belongsToMany(models.Article, {
      foreignKey: {
        name: 'categoryId',
        field: 'category_id',
      },
      through: 'Category_Group',
      as: 'articles',
      onUpdate: 'CASCADE',
    })
  }
}

export default Category
