const taskModel = require("../models/taskModel");
const { hash } = require("bcryptjs");
const { v4: uuid } = require("uuid");
const { response } = require("../app");

module.exports = {
  createtask: async (body) => {
    try {
      body.password = await hash(body.password, 10);
      body.taskID = uuid();
      const task = await taskModel.createtask(body);
      if (task.error) {
        return {
          error: task.error,
        };
      }
      delete task.response.dataValues.password;
      return {
        response: task.response,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  getAlltasks: async () => {
    try {
      const tasks = await taskModel.getAlltasks();
      if (tasks.error) {
        return {
          error: tasks.error,
        };
      }
      return {
        response: tasks.response,
      };
    } catch (error) {
      return { error: error };
    }
  },
//   deleteUser:async(userID)=>{
//     try{const deleteUser=await userModel.deleteUser(userID)
//         if(deleteUser.error || !deleteUser.response){
//           return{
//             error:{
//               message:"UNABLE TO DELETE!",
//               error: deleteUser?.error || deleteUser.response
//             }
//           }
//         }
//         return {
//           response:{
//             message:"USER IS DELETED!",
//             response:user.response
//           }
//         }
//     }catch(error){
//       console.log(error," from service")

//       return{
//         error:error
//       }
//     }
//   }
};
