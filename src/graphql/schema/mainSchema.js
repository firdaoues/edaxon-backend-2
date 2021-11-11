import { gql } from "apollo-server-express";
import { userSchema } from "./user.js";
import { authSchema } from "./auth.js";
import { skillSchema } from "./skill.js";
import { questionSchema } from "./question.js";

export const typeDefs = gql`
  ${userSchema}
  ${authSchema}
  ${skillSchema}
  ${questionSchema}

  type Query {
    login(email: String, password: String): AuthData
  }
  type Mutation {
    # User
    creatorLogin(email: String, password: String): AuthData
    findAllUser: [User]
    creatUser(userInput: UserInput): User
    getUserById(userId: ID!): User
    updateUser(userInput: UserInput, userId: ID!): User
    updateUserRole(userRole: String!, userId: ID!): User
    deleteUser(userId: ID!): User
    # Skill
    insertSkill(skillInput: SkillInput): Skill
    updateSkill(skillInput: SkillInput, skillId: ID!): Skill
    deleteSkill(skillId: ID!): Skill
  }
  schema {
    query: Query
    mutation: Mutation
  }
`;
