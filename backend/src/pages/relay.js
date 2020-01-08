import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import environment from '../relay/environment';
import ListCustomers from '../components/ListCustomers';
import Viewer from '../components/Viewer';

export default () => {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query relayQuery {
          viewer {
            name
          }
          allCustomers {
            id
            name
          }
        }
      `}
      render={({ error, props }) => {
        if (error) {
          return <div>Error!</div>;
        }
        if (!props) {
          return <div>Loading...</div>;
        }
        return (
          <div>
            <Viewer viewer={props.viewer} />
            <ListCustomers customers={props.allCustomers} />
          </div>
        );
      }}
    />
  );
};
