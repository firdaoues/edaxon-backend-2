import { findUserbyEmail, findUserById } from "../../services/user.services.js";
import { ApolloError } from "apollo-server-errors";
import bcrypt from "bcryptjs";

/**
 * @description check if the user exits using the user email
 * @memberOf helpers.checks.user.check
 * @public
 * @param  {String} email user email
 * @param  {String} password user password
 * @return  {Object} user
 */
export const checkUserByEmail = async (email, password) => {
  try {
    const user = await findUserbyEmail(email);
    if (!user) {
      throw new Error("user does not exist !");
    }
    if (password) {
      const isEsqual = await bcrypt.compare(password, user.password);

      if (!isEsqual) {
        throw new Error("password is incorrect  !");
      }
    }
    // this check return the user for the bihavior of the called function
    return user;
  } catch (err) {
    console.log(err);
  }
};
/**
 * @description check if the user exits using the user id
 * @memberOf helpers.checks.user.check
 * @public
 * @param  {String} userId user id
 * @return  {Object} user
 */
export const checkUserById = async (userId) => {
  try {
    const user = await findUserById(userId);

    if (!user) {
      throw new Error("User does not exist");
    }
  } catch (err) {
    console.log(err);
  }
};

/**
 * @description check if the user already exist  using the user email
 * @memberOf helpers.checks.user.check
 * @public
 * @param  {String} email user email
 * @return  {Object} user
 */
export const checkUserAlreadyExist = async (email) => {
  const user = await findUserbyEmail(email);
  if (user) {
    throw new ApolloError("User already exist", "BAD_USER_INPUT");
  }
};

/**
 * @description check if the user is auth
 * @memberOf helpers.checks.user.check
 * @public
 * @param  {Object} req auth req
 * @return  {Boolean} true if auth exist
 */
export const checkUserIsAuth = async (req) => {
  if (!req.req.isAuth) {
    throw new Error("User not auth ");
  }
  return true;
};

/**
 * @description check if the user is admin
 * @memberOf helpers.checks.user.check
 * @public
 * @param  {Object} req auth req
 * @return  {Boolean} true if is admin
 */
export const checkIsAdmin = (req) => {
  const role = req.req.role;
  console.log(role);
  if (!role) {
    throw new Error("token not exist");
  }
  if (role === "Admin") {
    return true;
  }
  throw new Error("User is not authorized");
};
