require('dotenv').config();

import express from 'express';
import cors from 'cors';
import { json, urlencoded } from 'body-parser';
import jwt from 'jsonwebtoken';
 
const app = express();
const port = process.env.PORT || 4000;
 
// static user details
const userData = {
  userId: "1",
  password: "123456",
  name: "Demo",
  username: "test",
  isAdmin: true
};


// enable CORS
app.use(cors());
// parse application/json
app.use(json());
// parse application/x-www-form-urlencoded
app.use(urlencoded({ extended: true }));
 
//middleware that checks if JWT token exists and verifies it if it does exist.
//In all future routes, this helps to know if the request is authenticated or not.
app.use(function (req, res, next) {
    // check header or url parameters or post parameters for token
    var token = req.headers['authorization'];
    if (!token) return next(); //if no token, continue
  
    token = token.replace('Bearer ', '');
    jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
      if (err) {
        return res.status(401).json({
          error: true,
          message: "Invalid user."
        });
      } else {
        req.user = user; //set the user to req so other routes can use it
        next();
      }
    });
  });
  
  // request handlers
  app.get('/', (req, res) => {
    if (!req.user) return res.status(401).json({ success: false, message: 'Invalid user to access it.' });
    res.send('Welcome to the Node.js Tutorial! - ' + req.user.name);
  });

 

// validate the user credentials
app.post('/signin', function (req, res) {
    const user = req.body.username;
    const pwd = req.body.password;
  
    // return 400 status if username/password is not exist
    if (!user || !pwd) {
      return res.status(400).json({
        error: true,
        message: "Username or Password is required."
      });
    }
  
    // return 401 status if the credential is not match.
    if (user !== userData.username || pwd !== userData.password) {
      return res.status(401).json({
        error: true,
        message: "Username or Password is wrong."
      });
    }
  
    // generate token
    const token = utils.generateToken(userData);
    // get basic user details
    const userObj = utils.getCleanUser(userData);
    // return the token along with user details
    return res.json({ user: userObj, token });
  });



  // verify the token and return it if it's valid
app.get('/verifyToken', function (req, res) {
    // check header or url parameters or post parameters for token
    var token = req.query.token;
    if (!token) {
      return res.status(400).json({
        error: true,
        message: "Token is required."
      });
    }
    // check token that was passed by decoding token using secret
    jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
      if (err) return res.status(401).json({
        error: true,
        message: "Invalid token."
      });
  
      // return 401 status if the userId does not match.
      if (user.userId !== userData.userId) {
        return res.status(401).json({
          error: true,
          message: "Invalid user."
        });
      }
      // get basic user details
      var userObj = utils.getCleanUser(userData);
      return res.json({ user: userObj, token });
    });
  });


app.listen(port, () => {
    console.log('Server started on: ' + port);
});
  