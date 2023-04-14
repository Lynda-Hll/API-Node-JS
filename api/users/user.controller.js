const pool = require("../../config/database");

const {
  createDon,
  createComment,
  createOthers,
  create,
  getUserByUserId,
  updateUser,
  deleteUser,
  getUserByUserName,
} = require("./user.service");
const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const TestMail = require("./TestMail");
module.exports = {
  createUser: (req, res) => {
    const body = req.body;
    console.log(req);
    // const salt = genSaltSync(10);
    // body.password = hashSync(body.password, salt);
    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection errror",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },

  addComment: (req, res) => {
    const body = req.body;
    console.log(req);
    createComment(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection errror",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },

  addOthers: (req, res) => {
    const body = req.body;
    console.log(req);
    createOthers(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection errror",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },

  addDon: (req, res) => {
    const body = req.body;
    console.log(req);
    createDon(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection errror",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },

  login: (req, res) => {
    const body = req.body;
    return res.json({
      success: 0,
      data: "Invalid email or passwordmarzoukk",
    });
    // getUserByUserEmail(body.email, (err, results) => {
    //   if (err) {
    //     console.log(err);
    //   }
    //   if (!results) {
    //     return res.json({
    //       success: 0,
    //       data: "Invalid email or password"
    //     });
    //   }
    //   const result = compareSync(body.password, results.password);
    //   if (result) {
    //     results.password = undefined;
    //     const jsontoken = sign({ result: results }, "qwe1234", {
    //       expiresIn: "1h"
    //     });
    //     return res.json({
    //       success: 1,
    //       message: "login successfully",
    //       token: jsontoken
    //     });
    //   } else {
    //     return res.json({
    //       success: 0,
    //       data: "Invalid email or password"
    //     });
    //   }
    // });
  },
  getUserByUserId: (req, res) => {
    const id = req.params.id;
    console.log(id);
    getUserByUserId(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not Found",
        });
      }
      results.password = undefined;
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  getAllUsers: (req, res) => {
    pool.query(
      `select id,titre, contenu, img from valeur`,
      [],
      (error, results) => {
        if (error) {
          return res.json({
            err: error,
          });
        }
        return res.json({
          data: results,
        });
      }
    );
    // getUsers((a, b) => {
    //   if (a) {
    //     return res.json({
    //       data: a,
    //     });
    //   }
    //   return res.json({
    //     data: b,
    //   });
    // });
  },

  getUserByUserName: (req, res) => {
    const Nom = req.params.Nom;
    getUserByUserName(Nom, (err, results) => {
      if (err) {
        return res.json({
          data: err,
        });
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not Found",
        });
      }
      results.password = undefined;
      return res.json({
        success: 1,
        data: results,
      });
    });
  },

  getMarzouk: (req, res) => {
    return res.json({
      data: "bonjour marzouk",
    });
  },
  updateUsers: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    updateUser(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: "updated successfully",
      });
    });
  },
  deleteUser: (req, res) => {
    const data = req.body;
    deleteUser(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record Not Found",
        });
      }
      return res.json({
        success: 1,
        message: "user deleted successfully",
      });
    });
  },

  sendMailer: (req, res) => {
    let k = new TestMail("marzouk.saibi@icdint.fr", "nbhjbhb").area();
    res.json({
      success: k,
      data: " email r sendingukk",
    });
  },
};
