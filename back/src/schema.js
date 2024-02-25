const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    deliveryAddresses: [String]!
    paymentMethods: [String]!
    purchaseHistory: [String]!
  }
  type Query {
    userByEmailAndPassword(email: String!, password: String!): User
    users: [User]
    teste: String 
  }

`);

module.exports = schema;
