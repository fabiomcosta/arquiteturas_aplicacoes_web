import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import Link from 'next/link';
import ListCustomers from '../../components/ListCustomers';
import Viewer from '../../components/Viewer';

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
      name
    }
    allCustomers {
      id
      name
    }
  }
`;

export default RelayApp;