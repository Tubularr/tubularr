import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet } from 'react-native';
import store from './store/configureStore';
import Page from './components/Page/Page';
import PageHeader from './components/Header/PageHeader';
import PageContentWrapper from './components/Page/PageContentWrapper';

export default function App() {
  return (
    <Provider store={store}>
      <Page>
        <PageHeader />
        <PageContentWrapper />
      </Page>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
