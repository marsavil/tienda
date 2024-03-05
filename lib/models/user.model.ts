import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: { 
    type: String, 
    required: true 
  },
  username: { 
    type: String, 
    required: true, 
    unique: true },
  name: { 
    type: String, 
    required: true 
  },
  lastname: { 
    type: String,
    required: true,
  },
  image: {
    type: String
  }, 
  telephone: {
    type: String,
    required: true
  },
  address: {
    type:String,
    required: true
  },
  postCode: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  province: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  onboarded: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;