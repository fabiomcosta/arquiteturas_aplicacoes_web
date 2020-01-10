import React from 'react';
import { graphql } from 'react-relay';
import Link from 'next/link';
import ListCustomers from '../../relay/ListCustomers';
import Viewer from '../../relay/Viewer';

function RelayApp(props) {
  return (
    <div>
      <Link href='/relay/locations'>
        <a>Locations</a>
      </Link>
      <Viewer viewer={props.viewer} />
      <ListCustomers customers={props.allCustomers} />
    </div>
  );
}

RelayApp.query = graphql`
  query relayQuery {
    viewer {
      ...Viewer_viewer
    }
    allCustomers {
      ...ListCustomers_customers
    }
  }
`;

export default RelayApp;
