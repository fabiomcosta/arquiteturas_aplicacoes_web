import React from 'react';
import { graphql } from 'react-relay';
import Link from 'next/link';
import ListLocations from '../../relay/ListLocations';
import Viewer from '../../relay/Viewer';

function Locations(props) {
  return (
    <div>
      <Link href='/relay'>
        <a>Index</a>
      </Link>
      <Viewer viewer={props.viewer} />
      <ListLocations locations={props.allLocations} />
    </div>
  );
}

Locations.query = graphql`
  query locationsQuery {
    viewer {
      ...Viewer_viewer
    }
    allLocations {
      ...ListLocations_locations
    }
  }
`;

export default Locations;
