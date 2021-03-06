const { gql } = require("apollo-server");

exports.typeDefs  = gql`
  type Query {
    name: String
    animalsCount: Int
    names: [String!]!
    products(filter: ProductFilterInput): [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    category: Category
  }

  type Category {
    id: ID
    name: String!
    products(filter: ProductFilterInput): [Product!]!
  }

  input ProductFilterInput{
    onSale :Boolean
  }
`