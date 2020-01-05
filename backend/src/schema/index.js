import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

import { readById } from './data';

const query = new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all queries.',
  fields: {
    hello: {
      type: GraphQLString,
      resolve() {
        return 'world hello';
      }
    },
    hello2: {
      type: GraphQLString,
      resolve() {
        return 'world 2';
      }
    }
  }
});

export default new GraphQLSchema({ query });
