const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} = require('graphql');

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

const schema = new GraphQLSchema({ query });
module.exports = schema;
