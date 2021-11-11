
  // TODO: insert commets
  // user ctreaion formatter
  export const insertUserFormatter= (userObj, hashpwd) => {
    return {
      profile: {
        name: userObj.profile.name,
        phone: userObj.profile.phone,
        birthdate: userObj.profile.birthdate,
        occupation: userObj.profile.occupation,
        school: userObj.profile.school,
      },
      email: userObj.email,
      password: hashpwd,
      role: userObj.role,
    };
  }

  export const updateUserFormatter= (userObj) => {
    const user = {};
    const profile = {};
    if (userObj.profile.name) profile.name = userObj.profile.name;
    if (userObj.profile.phone) profile.phone = userObj.profile.phone;
    if (userObj.profile.birthdate)
      profile.birthdate = userObj.profile.birthdate;
    if (userObj.profile.occupation)
      profile.occupation = userObj.profile.occupation;
    if (userObj.profile.school) profile.school = userObj.profile.school;
    user.profile = profile;
    if (userObj.email) user.email = userObj.email;

    return user;
  }
