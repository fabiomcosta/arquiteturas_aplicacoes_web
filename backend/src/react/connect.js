import React, { useContext } from 'react';
import { DispatchContext, StateContext } from './context';

export function connect(mapStateToProps) {
  return function(Component) {
    return function ConnectedComponent() {
      const state = useContext(StateContext);
      const dispatch = useContext(DispatchContext);
      return <Component {...mapStateToProps(state)} dispatch={dispatch} />;
    };
  };
}
