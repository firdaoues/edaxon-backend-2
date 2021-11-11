export const insertUpdateSkillFormatters = (skillObj, userId) => {
  return {
    creator: userId,
    questions: skillObj.questions,
    name: skillObj.name,
    scrimba: skillObj.scrimba,
    privateVideo: skillObj.privateVideo,
    youtubeVideo: skillObj.youtubeVideo,
  };
};
