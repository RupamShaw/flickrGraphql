exports.Category= {
  products: ({id:categoryId}, {filter}, {db}) => {
    // const categoryId = parent.id
    const categoryProducts= db.products.filter(i => i.categoryId === categoryId)
    let filteredCategoryProducts = categoryProducts
    if (filter) {
      if (filter.onSale) {
        filteredCategoryProducts = filteredCategoryProducts.filter(prod => {
          return prod.onSale
        })
      }
      }
      return filteredCategoryProducts
  },
}