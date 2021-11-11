import { login } from "./auth.js";
import {
  creatUser,
  findAllUserResolver,
  getUserById,
  updateUser,
  updateUserRole,
  deleteUser,
} from "./user.js";
import { insertSkill,updateskillService,deleteskillService } from "./skill.js";

export const resolvers = {
  Query: {
    // // Auth
    login: login,
    // // User

    // // Courses
  },
  Mutation: {
    // Auth

    // User
    creatUser: creatUser,
    findAllUser: findAllUserResolver,
    getUserById: getUserById,
    updateUser: updateUser,
    updateUserRole: updateUserRole,
    deleteUser: deleteUser,
    //Skill
    insertSkill: insertSkill,
    updateskillService:updateskillService,
    deleteskillService:deleteskillService

    
  },
};
