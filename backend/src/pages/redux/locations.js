import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import Link from 'next/link';
import ListLocations from '../../components/ListLocations';
import Viewer from '../../components/Viewer';

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

function mapStateToProps(state) {
  return {
    viewer: state.viewer,
    allLocations: state.allLocations
  };
}

export default Locations;
