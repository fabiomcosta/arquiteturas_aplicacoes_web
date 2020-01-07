import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import environment from '../environment';
import ListCustomers from '../components/ListCustomers';

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
      variables={{}}
      render={({ error, props }) => {
        if (error) {
          return <div>Error!</div>;
        }
        if (!props) {
          return <div>Loading...</div>;
        }
        return (
          <>
            <h1>Viewer</h1>
            <div>{props.viewer.name}</div>
            <ListCustomers customers={props.allCustomers} />
          </>
        );
      }}
    />
  );
};
