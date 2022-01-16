import { gql } from '@apollo/client';

export const USERHISTORY_QUERY = gql`
    query userHistory($username: String!) {
        userHistory(username: $username) {
            owner
            num_of_view
            origin
            short
        }
}
`

export const LOGIN_QUERY = gql`
    query logIn($name: String!, $password: String!) {
        logIn(name: $name, password: $password) {
            name
            encrypted_password
        }
    }
`;