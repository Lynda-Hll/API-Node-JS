const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
  createUser,
  getUserByUserName,
  login,
  getUserByUserId,
  getAllUsers,
  updateUsers,
  deleteUser,
  sendMailer,
  getMarzouk,
  addComment,
  addOthers,
  addDon,
} = require("./user.controller");
router.get("/nom/:Nom", getUserByUserName);
router.get("/sending", sendMailer);
router.get("/lynda", getAllUsers);
router.get("/marzouk", getMarzouk);
router.post("/", createUser);
router.post("/addComment", addComment);
router.post("/addOthers", addOthers);
router.post("/addDon", addDon);
router.get("/id/:id", getUserByUserId);
router.post("/login", login);
router.patch("/", checkToken, updateUsers);
router.delete("/", checkToken, deleteUser);

module.exports = router;
