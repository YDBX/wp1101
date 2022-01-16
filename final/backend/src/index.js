import * as db from './db';
import mongo from './mongo';
import Route from './routers/shortUrl.js'
import cors from 'cors'
// // import Subscription from './resolvers/Subscription';

import {gqlSchema} from './resolvers/gqlSchema';
import {gqlRoot} from './resolvers/resolver'

var express = require('express');
var { graphqlHTTP } = require('express-graphql');
mongo();

// Construct a schema, using GraphQL schema language
const schema = gqlSchema;

// The root provides a resolver function for each API endpoint
const root = gqlRoot;

const app = express();
app.use(cors())
app.use('/graphql', graphqlHTTP({
  schema:  schema,
  rootValue: root,
  context: (db),
  graphiql: true,
}));

app.use('/', Route)

app.listen(5000);
// clean up database everytime after restarting the backend.
const deleteDB = async (db) => {
  try {
    await db.LinkModel.deleteMany({});
    await db.UserModel.deleteMany({});
    console.log("Database deleted");
  } catch (e) { throw new Error("Database deletion failed" + e); }
}
deleteDB(db);
console.log('Running a GraphQL API server at http://localhost:5000/graphql');