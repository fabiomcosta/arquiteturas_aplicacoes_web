import React from 'react';
import Link from 'next/link';
import { connect } from '../../react';
import ListLocations from '../../components/ListLocations';
import Viewer from '../../components/Viewer';

function Locations(props) {
  return (
    <div>
      <Link href='/react'>
        <a>Index</a>
      </Link>
      <Viewer viewer={props.viewer} />
      <ListLocations locations={props.allLocations} />
    </div>
  );
}

Locations.query = `
  query {
    viewer {
      name
    }
    allLocations {
      id
      name
    }
  }
`;

function mapStateToProps(state) {
  return {
    viewer: state.viewer,
    allLocations: state.allLocations
  };
}

export default connect(mapStateToProps)(Locations);
