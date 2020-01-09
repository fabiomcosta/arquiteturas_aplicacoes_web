import React, { useContext } from 'react';
import ListCustomers from '../../components/ListCustomers';
import Viewer from '../../components/Viewer';
import { connect } from '../../react';

function ReactApp(props) {
  return (
    <div>
      <Viewer viewer={props.viewer} />
      <ListCustomers customers={props.allCustomers} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    viewer: state.viewer,
    allCustomers: state.allCustomers
  };
}

export default connect(mapStateToProps)(ReactApp);
