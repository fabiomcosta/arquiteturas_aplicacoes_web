import React, { useContext } from 'react';
import Link from 'next/link';
import { connect } from '../../react';
import ListCustomers from '../../components/ListCustomers';
import Viewer from '../../components/Viewer';

function ReactApp(props) {
  return (
    <div>
      <Link href='/react/locations'>
        <a>Locations</a>
      </Link>
      <Viewer viewer={props.viewer} />
      <ListCustomers customers={props.allCustomers} />
    </div>
  );
}

ReactApp.query = `
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
  console.log(state);
  return {
    viewer: state.viewer,
    allCustomers: state.allCustomers
  };
}

export default connect(mapStateToProps)(ReactApp);
