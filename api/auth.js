const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const token = req.cookies.accessToken;

  if (token==null) return res.status(401).json({msg: "Unauthorized"});

  jwt.verify(token, process.env.ACCESS_TOKEN_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user
    return next();
  });
}

module.exports = authenticateToken

