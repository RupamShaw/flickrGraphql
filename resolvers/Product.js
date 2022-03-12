exports.Product ={
  category: (parent, args, {db}) => {
    return db.categories.filter(i => i.id===parent.categoryId)
  },
}