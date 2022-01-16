import { gql } from '@apollo/client';

export const CREATE_LINK_MUTATION = gql`
    mutation createLink($origin: String!, $username: String) {
        createLink(origin: $origin, username: $username) {
            owner
            num_of_view
            origin
            short
        }
    }
`;

export const CREATE_USER_MUTATION = gql`
    mutation createUser($name: String!, $password: String!) {
        createUser(name: $name, password: $password) {
            name
            encrypted_password
        }
    }
`;

export const DELETE_LINK_MUTATION = gql`
    mutation deleteLink($url: String!, $username: String!) {
        deleteLink(url: $url, username: $username)
    }
`;

export const SELF_DESIGN_LINK_MUTATION = gql`
    mutation selfDefLink($origin: String!, $short: String!, $username: String!) {
        selfDefLink(origin: $origin, short: $short, username: $username) {
            owner
            num_of_view
            origin
            short
        }
    }
`;