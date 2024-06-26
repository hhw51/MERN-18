require("dotenv").config();

const userModel = require("../models/userModel");
const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");

module.exports = {
  login: async (body) => {
    try {
      const isUser = await userModel.getUser(body.userName);
      if (isUser.error || !isUser.response) {
        return {
          error: {
            error: isUser?.error || isUser.response,
            message: "User Not Found!",
          },
        };
      }
      const isValid = await compare(
        body.password,
        isUser.response.dataValues.password
      );

      if (!isValid) {
        return {
          response: {
            token: "undefined",
            message: "invalid credentials",
          },
        };
      }

      delete isUser.response.dataValues.password;
      const token = sign(isUser.response.dataValues, process.env.SECRET, {
        expiresIn: 30,
      });

      //store in session table

      return {
        response: {
          token: token,
          message: "loggen in successfully!",
        },
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};


//middleware

require("dotenv").config();
const { date } = require("joi");
const { verify } = require("jsonwebtoken");

module.exports = {
  protected: async (req, res, next) => {
    try {
      const token = req.cookies.auth;
      if (token == "undefined") {
        return res.send({
          response: {
            message: "unauthorized user!",
            response: false,
          },
        });
      }

      verify(token, process.env.SECRET, (error, data) => {
        if (error) {
          return res.send({
            response: {
              message: "Forbidden access!",
              response: false,
            },
          });
        }

        // seesion get session from the token using token

        req.userData = data;
        next();
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};


//auth controller
const joi = require("joi");
const authService = require("../services/authService");

const loginSchema = joi.object().keys({
  userName: joi.string().required(),
  password: joi.string().min(6).max(18).required(),
});

module.exports = {
  login: async (req, res) => {
    try {
      const validate = await loginSchema.validateAsync(req.body);
      const login = await authService.login(validate);

      if (login.error) {
        return res.send({
          error: login.error,
        });
      }

      res.cookie("auth", login.response.token, {
        maxAge: 30000,
      });
      return res.send({
        response: login.response,
      });
    } catch (error) {
      return res.send({
        message: error.message,
      });
    }
  },

  logout: (req, res) => {
    console.log(req.body);
    return res.send({
      message: "logout Api",
      data: req.body,
    });
  },

  resetPassword: (req, res) => {
    return res.send({
      message: "reset password Api",
    });
  },
};

