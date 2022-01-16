var { buildSchema } = require('graphql');
export const gqlSchema = buildSchema(`
        type Query {
        userHistory(username: String!): [Link!]
        logIn(name: String! password: String!): User!
        }
        type Mutation {

        createUser(name: String! password: String!): User!
        createLink(origin: String! username: String): Link!
        deleteLink(url: String! username: String!): ID
        selfDefLink(origin: String! short: String! username: String!): Link!
        }
        type Link {
        id: ID
        owner: String
        num_of_view: Int
        origin: String!
        short: String!
        
        }
        type User{
        id: ID
        name: String!
        encrypted_password: String!
        }
`);
