import {
  findAllUser,
  findUserById,
  createNewUser,
  updateUserService,
  updateUserRoleService,
  deleteUserService,
} from "../../services/user.services.js";
import bcrypt from "bcryptjs";
import {
  insertUserFormatter,
  updateUserFormatter,
} from "../../helpers/formatters/user.formatter.js";

import {
  checkIsAdmin,
  checkUserAlreadyExist,
  checkUserById,
} from "../../helpers/checks/user.check.js";

/**
 *
 * @description cerate new user
 * @memberOf graphql.resolvers.user
 * @public
 * @param  {object} args user input
 * @returns {object} user object
 */
export const creatUser = async (_, args) => {
  try {
    // check is the use already exist
    await checkUserAlreadyExist(args.userInput.email);
    const hashedPswd = await bcrypt.hash(args.userInput.password, 12);

    const newUser = await createNewUser(
      insertUserFormatter(args.userInput, hashedPswd)
    );

    return newUser;
  } catch (err) {
    return err;
  }
};
/**
 * find all the user
 *
 * @memberOf graphql.resolvers.user
 * @public
 * @returns {object} user object
 */
export const findAllUserResolver = async (_, args, req) => {
  try {
    checkIsAdmin(req);
    // if (!checkRes) return checkRes;
    const users = await findAllUser();
    return users.map(async (res) => {
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
 * Update user
 *
 * @memberOf graphql.resolvers.user
 * @public
 * @param  {String} userId user id
 * @returns {object} user object
 */
export const updateUser = async (_, args) => {
  try {
    checkUserById(args.userId);
    const user = await updateUserService(
      updateUserFormatter(args.userInput),
      args.userId
    );
    return {
      ...user._doc,
    };
  } catch (err) {
    console.log(err);
    return err;
  }
};

/**
 * Update user role
 *
 * @memberOf graphql.resolvers.user
 * @public
 * @param  {String} userId user id
 * @returns {object} user object
 */
export const updateUserRole = async (_, args, req) => {
  // when we update a role of a user , the user need to be logged off from the front end
  try {
    checkIsAdmin(req);
    checkUserById(args.userId);
    const user = await updateUserRoleService(args.userRole, args.userId);
    return {
      ...user._doc,
    };
  } catch (err) {
    console.log(err);
    return err;
  }
};
/**
 * find the user by id
 *
 * @memberOf graphql.resolvers.user
 * @public
 * @param  {String} userId user id
 * @returns {object} user object
 */
export const getUserById = async (_, { userId }) => {
  const user = await findUserById(userId);

  return {
    ...user._doc,
  };
};
/**
 * deleteUser
 *
 * @memberOf graphql.resolvers.user
 * @public
 * @param  {String} userId user id
 * @returns {object} user object
 */
export const deleteUser = async (_, args) => {
  // TODO: develope the returning meassage 
  try {
    checkUserById(args.userId);
    const deleteUserResp = await deleteUserService(args.userId);
    return deleteUserResp;
  } catch (err) {
    console.log(err);
    return err;
  }
};
