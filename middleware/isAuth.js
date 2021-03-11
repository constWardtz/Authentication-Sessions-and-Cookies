const isAuth = (req, res, next) => {
  if (err) throw err;
  if (req.session.isAuth) {
    res.send("Authenticated!");
    next();
  } else {
    res.send("Not Authenticated!");
  }
};

module.exports = isAuth;
