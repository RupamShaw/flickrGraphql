using npm esm  import works in node.js   and in package.json "start": "nodemon -r esm ./server.js"
https://www.youtube.com/watch?v=qux4-yWeZvo


schema is way data going to lookslike. fruits:[string]
resolvers is function that returns value specified in schema fruits:()=>{ return ['banaan', 'apple']}
Scalar types are string, Int,Float and Boolean
non nullable values are by !
arrays of scalar return
names: [String!] // returns non nullable values so ["cat",null,"bat"] gives error but return null works 
name: [[String!] | null
 names: [String!]! // will give error for return null so this will neither array elements null and  return null both will gives error

so for returning array field need to specify array of object field in query --- products {
  name
}

query ExampleQuery {
  name
  animalsCount
  names
  products {
    name
  }
  product(id:"53a0724c-a416-4cac-ae45-bfaedce1f147"){
    name
  }
  categories {
    name
  }
}

=======find by id product relate to category query====

query($categoryId: ID!) {
  category(id: $categoryId) {
    name
    products {
      name
    }
  }
}
====product get category name=== 



===filter by onsale prod===
query($filter: ProductFilterInput){
 
 products(filter: $filter){
   name
  onSale
  
 }
}

=====filter by category