import React from 'react';
import RootNavigator from './src/routes';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'localhost:4000/graphql',
  cache: new InMemoryCache()
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <RootNavigator />
    </ApolloProvider>

  );
};

export default App;





