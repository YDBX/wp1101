import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
import { split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition  } from '@apollo/client/utilities';
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './Containers/App'
import reportWebVitals from './reportWebVitals'
import 'antd/dist/antd.min.css'

// Create an http link:
// const httpLink = new HttpLink({
//     uri: 'http://localhost:5000/graphql',
// });

// Create a WebSocket link:
// const wsLink = new WebSocketLink({
//     uri: `ws://localhost:5000`,
//     options: { reconnect: true },
// });

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
// const link = split(
//     // split based on operation type
//     ({ query }) => {
//         const definition = getMainDefinition(query);
//         return (
//           definition.kind === 'OperationDefinition' &&
//           definition.operation === 'subscription'
//         );
//     },
//     wsLink,
//     httpLink,
// );

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache().restore({}),
});

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()