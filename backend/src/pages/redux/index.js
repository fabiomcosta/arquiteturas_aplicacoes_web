import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import ListCustomers from '../../components/ListCustomers';
import Viewer from '../../components/Viewer';

function ReduxApp(props) {
  return (
    <div>
      <Link href='/redux/locations'>
        <a>Locations</a>
      </Link>
      <Viewer viewer={props.viewer} />
      <ListCustomers customers={props.allCustomers} />
    </div>
  );
}

ReduxApp.query = `
  query {
    viewer {
      name
    }
    allCustomers {
      id
      name
    }
  }
`;

function mapStateToProps(state) {
  return {
    viewer: state.viewer,
    allCustomers: state.allCustomers
  };
}

export default connect(mapStateToProps)(ReduxApp);
