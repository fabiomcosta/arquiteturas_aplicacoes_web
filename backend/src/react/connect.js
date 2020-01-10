import React, { useContext } from 'react';
import { DispatchContext, StateContext } from './context';

export function connect(mapStateToProps) {
  return function(Component) {
    function ConnectedComponent() {
      const state = useContext(StateContext);
      const dispatch = useContext(DispatchContext);
      return <Component {...mapStateToProps(state)} dispatch={dispatch} />;
    }
    Object.keys(Component).forEach(staticPropName => {
      ConnectedComponent[staticPropName] = Component[staticPropName];
    });
    return ConnectedComponent;
  };
}
