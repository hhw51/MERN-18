const joi = require("joi");
const userService = require("../services/userService");
const { response } = require("../app");
const createUserSchema = joi.object().keys({
  userName: joi.string().min(3).max(34).required(),
  password: joi.string().min(6).max(34).required(),
});
const deleteUserSchema = joi.object().keys({
  userID: joi.string().length(36).required(),
});
const updateUserSchema = joi.object().keys({
  userID: joi.string().length(36).required(),
  userName: joi.string().min(3).max(34),
  // firstName: joi.string().min(3).max(34).required(),
  // lastName: joi.string().min(3).max(34).required(),
})
const obj = {
  createUser: async (req, res) => {
    try {
      const validatee = await createUserSchema.validateAsync(req.body);
      const user = await userService.createUser(validatee);

      if (user.error) {
        console.log(user.error);

        return res.send({
          error: user.error,
        });
      }
      return res.send({ response: user.response });
    } catch (error) {
      console.log(error);
      return res.send({ error: error });
    }
  },
  getAllUser: async (req, res) => {
    try {
      const users = await userService.getAllUser();
      if (users.error) {
        return res.send({
          error: users.error,
        });
      }
      return res.send({
        response: users.response,
      });
    } catch (error) {
      return res.send({ error: error });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const validate = await deleteUserSchema.validateAsync(req.query);
      console.log(validate)
      const user = await userService.deleteUser(validate.userID);
      
      if (user.error) {
        return res.send({
          error: user.error,
        }); 
      }
      return res.send({
        response: user.response,
      });
    } catch (error) {
      console.log(error," from controller")
      return res.send({
        error: error,
      });
    }
  },
  updateUser: async(req, res) => {
    try {
      const validate = await updateUserSchema.validateAsync(req.query);
      console.log(validate)
      const user = await userService.updateUser(validate.userID);
      
      if (user.error) {
        return res.send({
          error: user.error,
        }); 
      }
      return res.send({
        response: user.response,
      });
    } catch (error) {
      console.log(error," from controller")
      return res.send({
        error: error,
      });
    }
  },

  editUser: (req, res) => {
    return res.send({
      message: "editUser API",
    });
  },
  getUser: (req, res) => {
    return res.send({
      message: "getUser API",
    });
  },
};
module.exports = obj;
