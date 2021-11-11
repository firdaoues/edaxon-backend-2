import { gql } from "apollo-server-express";
export const userSchema = gql`
  type User {
    _id: ID!
    email: String!
    password: String!
    role: String!
    dateCreated: String
    dateUpdated: String
    profile: profile
  }

  type profile {
    name: String
    phone: String
    birthdate: String
    occupation: String
    school: String
  }

  input profileInput {
    name: String
    phone: String
    birthdate: String
    occupation: String
    school: String
  }

  input UserInput {
    email: String
    password: String
    role: String
    profile: profileInput
  }
`;
