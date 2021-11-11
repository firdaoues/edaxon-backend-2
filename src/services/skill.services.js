import Skill from "../model/Skill.js";

/**
 * insert skill
 *
 * @memberOf services.skill
 * @public
 * @returns {object} skill object
 */
export const insertSkillService = async (skillObj) => {
  try {
    const newSkill = new Skill(skillObj);
    return await newSkill.save();
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
/**
 * @description find a skill by the name
 * @memberOf services.skill
 * @public
 * @returns {object} skill object
 */
export const findSkillbyName = async (name) => {
  try {
    return await Skill.findOne({ name: name });
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};


/**
 * find all skill
 *
 * @memberOf services.skill.skill
 * @public
 * @returns {object} skills object
 */
 export const findAllskill = async () => {
  return await Skill.find();

  
};
/**
 * Delete skill
 *
 * @memberOf services.skill
 * @public
 * @param  {string} skillId the skill id
 * @returns {Boolean}
 */
 export const deleteskillService = async (skillId) => {
  
  try {
   return await Skill.findOneAndRemove({ _id: skillId })
  } catch (error) {
    return error
  }
   
};

/**
 * Update Skill
 *
 * @memberOf services.Skill
 * @public
 * @param  {object} skillFields the Skill fields
 * @param  {string} skillId the Skill id
 * @returns {object} Skill object
 */
 export const updateSkillService = async (skillFields, skillId) => {
  try {
    const updatedSkill = await Skill.findOneAndUpdate(
      { _id: skillId },
      { $set: skillFields },
      { new: true }
    );
  
    if (updatedSkill == null) throw new Error("something wnet wrong !");
  
    return updatedUser;
  } catch (error) {
    return error
  }
};

/**
 * Returns the skill by the skill id
 *
 * @memberOf services.skill.skill
 * @public
 * @param  {string} skillId the skill id
 * @returns {object} skill object
 */
 export const findskillById = async (skillId) => {
 try {
  return await Skill.findById(skillId);
 } catch (error) {
   console.error(error);
   return error
 }

   
};