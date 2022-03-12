exports.Query = {
    name: () => {
      return "Ant"
    },
    animalsCount: () => {
      return 10
    },
    names: () => {
      return ["cat", "bat"]
    },
  products: (parent, {filter}, {db}) => {
    let filteredProducts = db.products
    if (filter) {
      if (filter.onSale) {
        filteredProducts = filteredProducts.filter(prod => {
          return prod.onSale
        })
      }
      }
      return filteredProducts
    },
    product: (parent, args, {db}) => {
      // const prod =
      return db.products.find(i => i.id === args.id)
      // if (!prod) return null
      // return prod
    },
    categories: (parent, args, { db }) => {
      return db.categories
    },
    category: (parent, args, {db}) => {
      return db.categories.find(i => i.id === args.id)
    },
}

