import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import ListLocations from '../components/ListLocations';

export default createFragmentContainer(ListLocations, {
  locations: graphql`
    fragment ListLocations_locations on Location @relay(plural: true) {
      id
      name
    }
  `
});
