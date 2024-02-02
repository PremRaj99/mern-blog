import { timeStamp } from "console";
import mongoose from "mongoose";

const userSchema = new userSchema(
  {
    username: {
      type: string,
      require: true,
      unique: true,
    },
    email: {
      type: string,
      require: true,
      unique: true,
    },
    password: {
      type: string,
      require: true,
    },
  },
  { timeStamp: true }
);

const User = mongoose.model('User', userSchema);

export default User;
