import mongoose from "mongoose";

//  create the userSchema 
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "please username!"]
  },
  email: {
    type: String,
    required: [true, "please enter a valid email address!"],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "please enter a password!"]
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user"
  }
}, {
  timestamps: true // Automatically manage createdAt and updatedAt fields
});


// create User model 
const User = mongoose.model('User', userSchema);

// Export the User model 
export default User;