import React from 'react';
import { connect } from 'react-redux';
import ListCustomers from '../components/ListCustomers';
import Viewer from '../components/Viewer';

function ReduxApp(props) {
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

export default connect(mapStateToProps)(ReduxApp);
