import User from "../models/userModel.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import { userRegistrationValidation, userLoginValidation } from '../validation/userValidation.js'

import envConfig from '../config/envConfig.js'

// register
const register = async (req, res, next) => {
  try {
    const reqBody = req.body;
    const { error } = userRegistrationValidation.validate(reqBody);
    // check error is prsent or not
    if (error) {
      const err = new Error();
      err.status = 401;
      err.message = error.details[0].message;
      return next(err); // pass the error to the globalErrorHandler
    }

    //  destructure the  req body 
    const userName = reqBody.userName;
    const email = reqBody.email;
    const password = reqBody.password;
    const role = reqBody.role;

    // check user Already exist 
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      const err = new Error();
      err.status = 401;
      err.message = "User already exists";
      return next(err);
    }


    //  hashed Password 
    const hashedPassword = await bcrypt.hash(password, 10);

    //  create user 
    const user = new User({
      userName: userName,
      email: email,
      password: hashedPassword,
      role: role
    })

    await user.save();
    res.status(201).json({ message: "User created successfully", user: user });

  } catch (err) {
    return next(err);
  }
}


// login
const login = async (req, res, next) => {
  try {
    const reqBody = req.body;
    const { error } = userLoginValidation.validate(reqBody);
    if (error) {
      const err = new Error();
      err.status = 401;
      err.message = error.details[0].message;
      return next(err);
    }
    // check user already exist or not
    const userExist = await User.findOne({ email: reqBody.email });
    if (!userExist) {
      const err = new Error();
      err.status = 401;
      err.message = "User not found";
      return next(err);
    }
    // check password is correct or not 
    // use bcrypt to validate password 
    const isPasswordCorrect = await bcrypt.compare(reqBody.password, userExist.password);

    if (!isPasswordCorrect) {
      const err = new Error();
      err.status = 401;
      err.message = "User not found";
      return next(err);
    }

    // generate token 
    const token = jwt.sign({ userId: userExist._id }, envConfig.jwt_secrete, { expiresIn: envConfig.jwt_expire })
    // set the token in the cookie 
    res.cookie('token', token, { httpOnly: true, secure: envConfig.node_env === 'production' });

    return res.status(200).json({ message: "User logged in successfully", token: token });
  } catch (error) {
    return next(error);
  }
}

// logout
const logout = async (req, res, next) => {
  try {

    res.clearCookie('token', {
      httpOnly: true,
      secure: envConfig.node_env === 'production'
    });

    return res.status(200).json({
      success: true,
      message: "User logged out successfully"
    });
  } catch (error) {
    return next(error);
  }
};


export { register, login, logout }