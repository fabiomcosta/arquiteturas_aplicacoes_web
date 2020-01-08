import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { fetchQuery } from '../utils';

const initialState = {};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INIT':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

function App(props) {
  const { Component, pageProps, store } = props;
  console.log(props);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
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
  ctx.store.dispatch({ type: 'INIT', payload: pageLoadData.data });
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};
  return { pageProps };
};

function makeStore(initialState, options) {
  return createStore(reducer, initialState);
}

export default withRedux(makeStore)(App);
