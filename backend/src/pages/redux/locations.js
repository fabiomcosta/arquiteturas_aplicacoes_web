import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import ListLocations from '../../components/ListLocations';
import Viewer from '../../components/Viewer';

function Locations(props) {
  return (
    <div>
      <Link href='/redux'>
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

export default connect(mapStateToProps)(Locations);
