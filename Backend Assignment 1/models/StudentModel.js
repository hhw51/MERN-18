const { models } = require("./index");

module.exports = {
  createStudent: async (body) => {
    try {
      const Student = await models.Student.create({ ...body });
      return {
        response: Student,
      };
    } catch (error) {
      console.log(error);
      return { error: error };
    }
  },
  getAllStudents: async () => {
    try {
      const Student = await models.Student.findAll({
        attributes: { exclude: ["password"] },
      });
      return {
        response: Student,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  getStudent: async () => {
    try {
      const Student = await models.Student.findOne({
        attributes: { exclude: ["password"] },
      });
      return {
        response: Student,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  getStudentbyPK: async () => {
    try {
      const Student = await models.Student.findByPk({
        attributes: { exclude: ["password"] },
      });
      return {
        response: Student,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  deleteStudent: async (StudentID) => {
    try {
      const deleteStudent = await models.Student.destroy({
        where: {
          StudentID: StudentID,
        },
      });
      return {
        response: deleteStudent,
      };
    } catch (error) {
      console.log(error," from model")
      return {
      error: error
    }
    }
  },
  updateStudent: async ({StudentID, ...body}) => {
    try {
      const updateStudent = await models.Student.update(
        { ...body },
        {
          where: {
            StudentID: StudentID,
          },
        }
      );
      return {
        response: updateStudent,
      };
    } catch (error) {
      return{
        error: error
      }
    }
  },
};
