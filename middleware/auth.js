const UserModel = require("../models/User");
const bcrypt = require("bcryptjs");
const isAuth = require("./isAuth");

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });
  const isMatch = await bcrypt.compare(password, user.password);

  !user &&
    res.status(200).json({
      isAuth: false,
      message: "This email does not exist!",
    });

  !isMatch &&
    res.status(200).json({
      isAuth: false,
      message: "User don't have an account",
    });

  req.session.isAuth = true;
  res.status(200).json({
    isAuth: true,
    message: "Successfully Logged In!",
  });
};

exports.register = async (req, res) => {
  const { username, email, password } = req.body;

  let user = await UserModel.findOne({ email });
  const hashPassword = await bcrypt.hash(password, 12);

  user &&
    res.status(200).json({
      isRegistered: false,
      message: "Already Exist!",
    });

  user = new UserModel({
    username,
    email,
    password: hashPassword,
  });

  await user.save();

  res.status(200).json({
    isRegistered: true,
    message: "Successfully Registered!",
  });
};

exports.logout = async (req, res) => {
  req.session.destroy((err) => {
    if (err) throw err;
    res.json({
      isLoggedOut: true,
      message: "Successfully Logged out!",
    });
  });
};

(exports.dashboard = isAuth),
  (req, res) => {
    res.send("Dashboard");
  };
