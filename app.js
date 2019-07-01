const express = require('express');

const jwt = require('jsonwebtoken');

const app = express();

const port = process.env.PORT;

app.get('/api/v1/', (req, res) => {
  res.json({
    message: 'Welcome to API',
  });
});

app.post('/api/v1/posts', verifyToken, (req, res) => {
  jwt.verify(req.token, process.env.JWT_KEY, (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: 'Posted created...',
        authData,
      });
    }
  });
});
app.post('/api/v1/login', (req, res) => {
  // mock user
  const user = {
    id: 1,
    username: 'Lucian',
    email: 'lucian@gmail.com',
  };

  // create JWT
  const token = jwt.sign({user}, process.env.JWT_KEY, {
    expiresIn: '30s',
  });

  res.json({
    message: 'Auth successfull',
    token,
  });
});

// format of Token
// Authorization: Bearer <access_token>

// verify token
function verifyToken(req, res, next) {
  // get auth header value
  const bearerHeader = req.headers.authorization;

  // check if bearer is undefined
  console.log(bearerHeader);
  if (bearerHeader) {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];

    // set the token
    req.token = bearerToken;
    // next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
}

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
