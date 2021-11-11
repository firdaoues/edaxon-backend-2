import User from "../model/User.js";

/**
 * find all user
 *
 * @memberOf services.user.user
 * @public
 * @returns {object} users object
 */
export const findAllUser = async () => {
  const users = await User.find();

  return users;
};
/**
 * Returns the user by the user id
 *
 * @memberOf services.user.user
 * @public
 * @param  {string} userId the user id
 * @returns {object} user object
 */
export const findUserById = async (userId) => {
  const user = await User.findById(userId);

  return user;
};
/**
 * Returns the user by user email
 *
 * @memberOf services.user.user
 * @public
 * @param  {string} email the user email
 * @returns {Array} array of user objects
 */
export const findUserbyEmail = async (email) => {
  const user = await User.findOne({ email: email });
  return user;
};

/**
 * Delete user
 *
 * @memberOf services.user.user
 * @public
 * @param  {string} userId the user id
 * @returns {object} user object
 */
export const deleteUserService = async (userId) => {
  // TODO: replace with await (remove then)
  return User.findOneAndRemove({ _id: userId })
    .then(() => {
      console.log("user deleted");
      return "user deleted succefully";
    })
    .catch((err) => {
      console.log(err.message);
      return err.message;
    });
};
/**
 * Returns the new user created
 *
 * @memberOf services.user.user
 * @public
 * @param  {Object} userObj the user userObj
 * @returns {object} user object
 */
export const createNewUser = async (userObj) => {
  try {
    const newUser = new User(userObj);

    const result = await newUser.save();

    return { ...result._doc };
  } catch (err) {
    return err;
  }
};
/**
 * Update user
 *
 * @memberOf services.user.user
 * @public
 * @param  {object} userFields the user fields
 * @param  {string} userId the user id
 * @returns {object} user object
 */
export const updateUserService = async (userFields, userId) => {

};
/**
 *
 * @description Update user role
 * @memberOf services.user.user
 * @param  {object} userFields the user fields
 * @param  {string} userId the user id
 * @returns {object} user object
 */
export const updateUserRoleService = async (userRole, userId) => {
  const updatedUser = await User.findOneAndUpdate(
    { _id: userId },
    { $set: { role: userRole } },
    { new: true }
  );

  if (updatedUser == null) throw new Error("something wnet wrong !");

  return updatedUser;
};

/**
 * return object array of users
 *
 * @memberOf services.user.user
 * @public
 * @param {Array} users array
 * @returns {Array} users object Array
 */
// export const findAllUser = async () => {
//   const users = await User.find();
//   return users.map((user) => {
//     return {
//       ...user._doc,
//     };
//   });
// };
