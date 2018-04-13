import { buildSchema } from 'graphql';

export const schema = buildSchema(`
  type Query {
    steps: [Step]
  },
  type Product {
    name: String
  },
  type Step {
    description: String,
    order: String,
    actions: [Action]
  }
  type Action {
    description: String,
    order: String,
    image: String,
    type: String
  }
`);