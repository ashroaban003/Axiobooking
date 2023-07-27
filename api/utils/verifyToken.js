
const jwt = require('jsonwebtoken');

 const verifyToken = (req, res, next) => {
  const {token} = req.cookies;
  if (!token) {
   return res.send("You are not authenticated!")
  }

  jwt.verify(token, process.env.JWT,{}, (err, user) => {
    if (err) res.send( "Token is not valid!");
    req.user = user;
    next();
  });
};

 const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return res.send("Invalid access");
    }
  });
};

 const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return res.send("not authorized,not admin");
    }
  });
};

module.exports ={
    verifyAdmin,
    verifyToken,
    verifyUser
}