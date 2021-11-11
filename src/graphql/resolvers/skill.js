import { insertSkillService,updateskillService ,deleteskillService,findAllskill} from "../../services/skill.services.js";
import {  checkskillById} from "../../helpers/checks/skill.check.js";
import { insertUpdateSkillFormatters } from "../../helpers/formatters/Skill.formatter.js";






/**
 * find all the skill
 *
 * @memberOf graphql.resolvers.skill
 * @public
 * @returns {Array<object>} array of skills 
 */
 export const findAllskillResolver = async (_, args, req) => {
  try {
    checkIsAdmin(req);
    // if (!checkRes) return checkRes;
    const skills = await findAllskill();
    return skills.map(async (res) => {
      return {
        ...res,
      };
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};
/**
 * @description cerate new skill
 * @memberOf graphql.resolvers.skill
 * @public
 * @param  {object} args skill input
 * @returns {object} skill object
 */
export const insertSkill = async (_, args, req) => {
  try {
    const actualUser = args.userId;
    return await insertSkillService(
      insertUpdateSkillFormatters(args.skillInput, actualUser)
    );
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

/**
 * Update skill
 *
 * @memberOf graphql.resolvers.skill
 * @public
 * @param  {String} skillId skill id
 * @returns {object} skill object
 */
 export const updateskill = async (_, args) => {
  try {
    checkskillById(args.skillId);
    const skill = await updateskillService(
      insertUpdateSkillFormatters(args.skillInput),
      args.skillId
    );
    return {
      ...skill._doc,
    };
  } catch (err) {
    console.log(err);
    return err;
  }
};

/**
 * delete skill
 *
 * @memberOf graphql.resolvers.skill
 * @public
 * @param  {String} skillId skill id
 * @returns {object} skill object
 */
 export const deleteskill = async (_, args) => {
  // TODO: develope the returning meassage 
  try {
    checkskillById(args.skillId);
    return await deleteskillService(args.skillId);
   
  } catch (err) {
    console.log(err);
    return err;
  }
};