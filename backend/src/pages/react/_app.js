import React, { useReducer } from 'react';
import { fetchQuery } from '../../utils';
import { DispatchContext, StateContext, reducer } from '../../react';

function App({ Component, pageProps, initialState }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <Component {...pageProps} />
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

App.getInitialProps = async ({ Component, ctx }) => {
  const pageLoadData = await fetchQuery({
    text: `
    query {
      viewer {
        name
      }
      allCustomers {
        id
        name
      }
    }
  `
  });
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};
  return { pageProps, initialState: pageLoadData.data };
};

export default App;
