const { response } = require("../app");
const { models } = require("./index");

module.exports = {
  createTeacher: async (body) => {
    try {
      const Teacher = await models.Teacher.create({ ...body });
      return {
        response: Teacher,
      };
    } catch (error) {
      console.log(error);

      return { error: error };
    }
  },
  getAllTeachers: async () => {
    try {
      const Teacher = await models.Teacher.findAll({
        attributes: { exclude: ["password"] },
      });
      return {
        response: Teacher,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  getTeacher: async () => {
    try {
      const Teacher = await models.Teacher.findOne({
        attributes: { exclude: ["password"] },
      });
      return {
        response: Teacher,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  getTeacherbyPK: async () => {
    try {
      const Teacher = await models.Teacher.findByPk({
        attributes: { exclude: ["password"] },
      });
      return {
        response: Teacher,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  deleteTeacher: async (TeacherID) => {
    try {
      const deleteTeacher = await models.Teacher.destroy({
        where: {
          TeacherID: TeacherID,
        },
      });
      return {
        response: deleteTeacher,
      };
    } catch (error) {
      console.log(error," from model")
      return {
      error: error
    }
    }
  },
  updateTeacher: async ({TeacherID, ...body}) => {
    try {
      const updateTeacher = await models.Teacher.update(
        { ...body },
        {
          where: {
            TeacherID: TeacherID,
          },
        }
      );
      return {
        response: updateTeacher,
      };
    } catch (error) {
      return{
        error: error
      }
    }
  },
};
