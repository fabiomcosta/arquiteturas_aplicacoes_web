import React from 'react';
import { createStore } from 'redux';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import { fetchQuery } from '../../utils';
import { reducer } from '../../react';

function App({ Component, pageProps, store }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

App.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : null;
  const pageLoadData = await fetchQuery({
    text: Component.query
  });
  const initialState = pageLoadData.data;
  ctx.store.dispatch({ type: 'HYDRATE', payload: initialState });
  return { pageProps };
};

const makeStore = (initialState, options) => {
  return createStore(reducer, initialState);
};

export default withRedux(makeStore)(App);
