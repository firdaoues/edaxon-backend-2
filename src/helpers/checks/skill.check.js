import { findSkillbyName } from "../../services/skill.services.js";

/**
 * @description check if the skill already exist  using the skill email
 * @memberOf helpers.checks.skill.check
 * @public
 * @param  {String} skillName user email
 * @return  {Object} user
 */
export const checkUserAlreadyExist = async (skillName) => {
  const skill = await findSkillbyName(skillName);
  if (skill) {
    throw new ApolloError("skill already exist", "BAD_SKILL_INPUT");
  }
};

/**
 * @description check if the skill exits using the skill id
 * @memberOf helpers.checks.skill.check
 * @public
 * @param  {String} skillId skill id
 * @return  {Object} skill
 */
 export const checkskillById = async (skillId) => {
  try {
    const skill = await findskillById(skillId);

    if (!skill) {
      throw new Error("skill does not exist");
    }
  } catch (err) {
    console.log(err);
  }
};