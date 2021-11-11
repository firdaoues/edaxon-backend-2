import { gql } from "apollo-server-express";

export const authSchema = gql`
  type AuthData {
    userId: ID!
    token: String!
    tokenExpiration: String!
  }
`;
