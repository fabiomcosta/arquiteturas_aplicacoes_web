import React, { useReducer, useEffect, useMemo } from 'react';
import { fetchQuery } from '../../utils';
import { DispatchContext, StateContext, reducer } from '../../react';

function App({ Component, pageProps, initialState }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: 'HYDRATE', payload: initialState });
  }, [initialState]);
  // Only re-render the component when a new `state` comes in via the
  // hydration, or the page component would be rendered with the old state.
  const component = useMemo(() => <Component {...pageProps} />, [state]);
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{component}</StateContext.Provider>
    </DispatchContext.Provider>
  );
}

App.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : null;
  const pageLoadData = await fetchQuery({
    text: Component.query
  });
  return { pageProps, initialState: pageLoadData.data };
};

export default App;
