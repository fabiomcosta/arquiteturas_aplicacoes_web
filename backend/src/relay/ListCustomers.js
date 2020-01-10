import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import ListCustomers from '../components/ListCustomers';

export default createFragmentContainer(ListCustomers, {
  customers: graphql`
    fragment ListCustomers_customers on Customer @relay(plural: true) {
      id
      name
    }
  `
});
