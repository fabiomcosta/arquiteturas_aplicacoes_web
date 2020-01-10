import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { fetchQuery } from '../../utils';
import { reducer } from '../../react';

function App({ Component, pageProps, initialState }) {
  const store = createStore(reducer, initialState);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

App.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};
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
      allLocations {
        id
        name
      }
    }
  `
  });
  return { pageProps, initialState: pageLoadData.data };
};

export default App;
