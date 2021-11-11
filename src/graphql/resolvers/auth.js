import jwt from "jsonwebtoken";

import { checkUserByEmail } from "../../helpers/checks/user.check.js";

/**
 * Returns the user login details
 *
 * @memberOf graphql.resolvers.auth
 * @public
 * @param  {object} {email,password} email and password of the user
 * @returns {object} user login  object
 */
export const login = async (_, { email, password }) => {
  try {
    const user = await checkUserByEmail(email, password);

    const token = jwt.sign(
      { userId: user.id, eamil: user.email, role: user.role },
      "secretkey",
      { expiresIn: "356 days" }
    );
    const today = new Date();
    return {
      userId: user.id,
      token: token,
      tokenExpiration: today.setDate(today.getDate() + 365),
    };
  } catch (error) {
    return error;
  }
};
/**
 * reset passeword
 *
 * @memberOf graphql.resolvers.auth
 * @public
 * @param  {object} {email,password} email and password of the user
 * @returns {Boolean} user login  object
 */
export const resetPassword = async (_, { email, password }) => {};
