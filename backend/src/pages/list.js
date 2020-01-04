import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import environment from '../environment';

export default () => {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query listQuery {
          hello
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
        return <div>User ID: {props.hello}</div>;
      }}
    />
  );
};
