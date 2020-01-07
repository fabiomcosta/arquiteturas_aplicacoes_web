/**
 * This Scheme is a simplification of the one defined at:
 * https://github.com/graphql/graphql-relay-js/blob/35f1926e5a7e345c5aa9c835b9b148d266abd5b9/src/__tests__/starWarsSchema.js
 *
 * Another implementation that helped was:
 * https://github.com/steveluscher/zero-to-graphql/blob/02669add77f97ac6f72c44b2752d178811b7eab6/zero-node/schema.js
 */
import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

import {
  fromGlobalId,
  globalIdField,
  nodeDefinitions,
  connectionArgs,
  connectionDefinitions,
  connectionFromArray
} from 'graphql-relay';

import {
  getCustomer,
  getLocation,
  getUser,
  getAllCustomers,
  getAllUsers
} from './data';

/**
 * We get the node interface and field from the relay library.
 *
 * The first method is the way we resolve an ID to its object. The second is the
 * way we resolve an object that implements node to its type.
 */
const { nodeInterface, nodeField } = nodeDefinitions(
  globalId => {
    const { type, id } = fromGlobalId(globalId);
    if (type === 'Customer') {
      return getCustomer(id);
    }
    if (type === 'Location') {
      return getLocation(id);
    }
    if (type === 'User') {
      return getUser(id);
    }
  },
  obj => {
    if (obj.locations) {
      return CustomerType;
    }
    if (obj.address) {
      return LocationType;
    }
    return UserType;
  }
);

/**
 * We define the location type, which implements the node interface.
 */
const LocationType = new GraphQLObjectType({
  name: 'Location',
  description: 'A physical location owned by customers.',
  interfaces: [nodeInterface],
  fields: () => ({
    id: globalIdField(),
    name: {
      type: GraphQLString,
      description: 'The name of the location.'
    },
    address: {
      type: GraphQLString,
      description: 'The address of the location.'
    }
  })
});

/**
 * We define the relationship between the Customer and its Locations.
 * These entity are called "Connections" on Relay terms.
 * Deep dive on connections: https://dev-blog.apollodata.com/explaining-graphql-connections-c48b7c3d6976
 */
const { connectionType: LocationConnection } = connectionDefinitions({
  nodeType: LocationType
});

const CustomerType = new GraphQLObjectType({
  name: 'Customer',
  description:
    'A customer from Cloudia, generally represented by either a person or a company.',
  interfaces: [nodeInterface],
  fields: () => ({
    id: globalIdField(),
    name: {
      type: GraphQLString,
      description: 'The name of the customer.'
    },
    locations: {
      type: LocationConnection,
      description: 'The physical locations owned by this customer.',
      args: connectionArgs,
      resolve: (customer, args) =>
        connectionFromArray(customer.locations.map(getLocation), args)
    }
  })
});

const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'A user from the admin system.',
  interfaces: [nodeInterface],
  fields: () => ({
    id: globalIdField(),
    name: {
      type: GraphQLString,
      description: 'The name of the user.'
    }
  })
});

const viewerField = {
  type: UserType,
  description: 'The user that is currently viewing the page.',
  // Here you'd get the user based on some sort of authentication cookie
  // or something like that.
  resolve: (root, args, { viewer }) => viewer
};

const allUsersField = {
  type: new GraphQLList(UserType),
  description: 'All the users.',
  resolve: getAllUsers
};

const allCustomersField = {
  type: new GraphQLList(CustomerType),
  description: 'All the customers.',
  resolve: getAllCustomers
};

const query = new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all queries.',
  fields: {
    node: nodeField,
    viewer: viewerField,
    allCustomers: allCustomersField,
    allUsers: allUsersField
  }
});

// const mutation = ...;

export default new GraphQLSchema({ query });
