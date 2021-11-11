import { gql } from "apollo-server-express";
export const questionSchema = gql`
  type Question {
    _id: ID!
    creator: User!

    type: String!
    questionText: String
    isCode: String
    answers: [Answer]
  }

  type Answer {
    text: String
    correct: String
    users: [User]
    skill: Skill
  }
`;
