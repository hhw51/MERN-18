const { models } = require("./index");

module.exports = {
  createMarks: async (body) => {
    try {
      const Marks = await models.Marks.create({ ...body });
      return {
        response: Marks,
      };
    } catch (error) {
      console.log(error);

      return { error: error };
    }
  },
  getAllMarkss: async () => {
    try {
      const Marks = await models.Marks.findAll({
        attributes: { exclude: ["password"] },
      });
      return {
        response: Marks,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  deleteMarks: async (MarksID) => {
    try {
      const deleteMarks = await models.Marks.destroy({
        where: {
          MarksID: MarksID,
        },
      });
      return {
        response: deleteMarks,
      };
    } catch (error) {
      console.log(error," from model")
      return {
      error: error
    }
    }
  },
  updateMarks: async ({MarksID, ...body}) => {
    try {
      const updateMarks = await models.Marks.update(
        { ...body },
        {
          where: {
            MarksID: MarksID,
          },
        }
      );
      return {
        response: updateMarks,
      };
    } catch (error) {
      return{
        error: error
      }
    }
  },
};
