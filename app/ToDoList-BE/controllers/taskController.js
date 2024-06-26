const joi = require("joi");
const taskService = require("../services/taskService");
const { response } = require("../app");
const task = require("../models/definitions/task");
const createTaskSchema = joi.object().keys({
  userID: joi.string().length(36).required(),
  title: joi.string().min(6).max(34).required(),
  userName: joi.string().min(6).max(34).required(),
});

const obj = {
  createtask: async (req, res) => {
    try {
      const validatee = await createTaskSchema.validateAsync(req.body);
      const task = await taskService.createtask(validatee);
      if (task.error) {
        console.log(task.error);
        return res.send({
          error: task.error,
        });
      }
      return res.send({ response: task.response });
    } catch (error) {
      console.log(error);
      return res.send({ error: error });
    }
  },
  getAlltask: async (req, res) => {
    try {
      const task = await taskService.getAlltasks();
      if (task.error) {
        return res.send({
          error: task.error,                                                                                  });
      }
      return res.send({
        response: task.response,
      });
    } catch (error) {
      return res.send({ error: error });
    }
  },
  //   deleteUser: async (req, res) => {
  //     try {
  //       const validate = await deleteUserSchema.validateAsync(req.query);
  //       console.log(validate)
  //       const user = await userService.deleteUser(validate.userID);

  //       if (user.error) {
  //         return res.send({
  //           error: user.error,
  //         });
  //       }
  //       return res.send({
  //         response: user.response,
  //       });
  //     } catch (error) {
  //       console.log(error," from controller")
  //       return res.send({
  //         error: error,
  //       });
  //     }
  //   },
  //   updateUser: (req, res) => {
  //     try {
  //       return res.send({
  //         message: "UpdateUser API",
  //       });
  //     } catch (error) {
  //       return res.send({
  //         error: error,
  //       })
  //     }
  //   },

  //   editUser: (req, res) => {
  //     return res.send({
  //       message: "editUser API",
  //     });
  //   },
  //   getUser: (req, res) => {
  //     return res.send({
  //       message: "getUser API",
  //     });
  //   },
};
module.exports = obj;
