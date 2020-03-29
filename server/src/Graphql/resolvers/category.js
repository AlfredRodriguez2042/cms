import Category from '../../Models/category'

export default {
  Query: {
    Category: async () => {},
    Categories: async () => {
      const categories = await Category.findAll({
        include: [
          {
            association: 'articles'
          }
        ]
      })
      console.log(categories)
      return categories
    }
  }
}
