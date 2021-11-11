import { gql } from "apollo-server-express";
export const skillSchema = gql`
  type Skill {
    _id: ID!
    creator: User!
    questions: [Question]
    name: String!
    scrimba: String
    privateVideo: String
    youtubeVideo: String
  }

  input SkillInput {
    creator: String!
    questions: [String]
    name: String!
    scrimba: String
    privateVideo: String
    youtubeVideo: String
  }
`;
