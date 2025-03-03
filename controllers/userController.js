import User from "../models/userModel.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import { userRegistrationValidation } from '../validation/userValidation.js'


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

// logout


export { register }