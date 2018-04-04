import { buildSchema } from 'graphql';

export const schema = buildSchema(`
  type Query {
    name: String,
    products(size: Int!): [Product],
    steps(size: Int!): [Step]
  },
  type Product {
    name: String
  },
  type Step {
    description: String,
    order: String,
    actions(size: Int!): [Action]
  }
  type Action {
    description: String,
    order: String,
    image: Image,
    type: String
  }
  type Image {
    url: String
  }
`);