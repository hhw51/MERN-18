const { response } = require("../app");
const { models } = require("./index");

module.exports = {
  createUser: async (body) => {
    try {
      const user = await models.users.create({ ...body });
      return {
        response: user,
      };
    } catch (error) {
      console.log(error);

      return { error: error };
    }
  },
  getAllUsers: async () => {
    try {
      const users = await models.users.findAll({
        attributes: { exclude: ["password"] },
      });
      return {
        response: users,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  deleteUser: async (userID) => {
    try {
      const deleteUser = await models.users.destroy({
        where: {
          userID: userID,
        },
      });
      return {
        response: deleteUser,
      };
    } catch (error) {
      console.log(error," from model")
      
      return {
      error: error
    }
    }
  },
  updateUser: async (userID, ...body) => {
    try {
      const updateUser = await models.users.update(
        { ...body },
        {
          where: {
            userID: userID,
          },
        }
      );
      return {
        response: updateUser,
      };
    } catch (error) {
      return{
        error: error
      }
    }
  },
};
