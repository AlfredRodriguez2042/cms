import { Model, DataTypes } from 'sequelize'
const { UUID, UUIDV4, STRING, TEXT, INTEGER } = DataTypes

class Article extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: UUID,
          primaryKey: true,
          defaultValue: UUIDV4()
        },
        title: {
          type: STRING,
          allowNull: false,
          unique: true
        },
        content: {
          type: TEXT,
          allowNull: false
        },
        viewCount: {
          type: INTEGER,
          defaultValue: 0
        }
      },
      {
        sequelize
      }
    )
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user'
    })
    this.hasMany(models.Tag, {
      foreignKey: {
        name: 'articleId',
        field: 'article_id'
      },
      as: 'tags',
      onUpdate: 'CASCADE'
    })
    this.belongsToMany(models.Category, {
      foreignKey: {
        name: 'articleId',
        field: 'article_id'
      },
      through: 'Category_Group',
      as: 'categories',
      onUpdate: 'CASCADE'
    })
    this.hasMany(models.Comment, {
      foreignKey: {
        name: 'articleId',
        field: 'article_id'
      },
      as: 'comments'
    })
    this.hasMany(models.Reply, {
      foreignKey: {
        name: 'articleId',
        field: 'article_id'
      },
      as: 'replies'
    })
  }
}
export default Article
