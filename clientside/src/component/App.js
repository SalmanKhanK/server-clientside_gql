import React from 'react';
import { Students } from './Students'
import './App.css';
import { ApolloProvider } from '@apollo/client';
import client  from '../config/graph_ql'
function App() {
  return (
    <div className="App">
     <ApolloProvider client={client}>
        <Students />
      </ApolloProvider>
    </div>
  );
}

export default App;
