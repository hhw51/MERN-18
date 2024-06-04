const userModel = require("../models/userModel");
const { hash } = require("bcryptjs");
const { v4: uuid } = require("uuid");
const { response } = require("../app");

module.exports = {
  createUser: async (body) => {
    try {
      body.password = await hash(body.password, 10);
      body.userID = uuid();
      const user = await userModel.createUser(body);
      if (user.error) {
        return {
          error: user.error,
        };
      }
      delete user.response.dataValues.password;
      return {
        response: user.response,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  getAllUser: async () => {
    try {
      const users = await userModel.getAllUsers();
      if (users.error) {
        return {
          error: users.error,
        };
      }
      return {
        response: users.response,
      };
    } catch (error) {
      return { error: error };
    }
  },
  deleteUser: async (userID) => {
    try {
      const deleteUser = await userModel.deleteUser(userID);
      if (deleteUser.error || !deleteUser.response) {
        return {
          error: {
            message: "UNABLE TO DELETE!",
            error: deleteUser?.error || deleteUser.response,
          },
        };
      }
      return {
        response: {
          message: "USER IS DELETED!",
          response: user.response,
        },
      };
    } catch (error) {
      console.log(error, " from service");

      return {
        error: error,
      };
    }
  },
  updateUser: async (userID) => {
    try {
      const updateUser = await userModel.updateUser(userID);
      if (updateUser.error || !updateUser.response[0]) {
        return {
          error: {
            message: "UNABLE TO UPDATE!",
            error: updateUser?.error || updateUser.response,
          },
        };
      }
      return {
        response: {
          message: "USER IS UPDATED!",
          response: updateUser.response,
        },
      };
    } catch (error) {
      console.log(error, " from service");

      return {
        error: error,
      };
    }
  },
};
