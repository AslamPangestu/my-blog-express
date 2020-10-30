const { Schema, model } = require("../config/db");

const UserSchema = new Schema(
  {
    email: {
      trim: true,
      type: String,
      unique: true,
      required: true,
    },
    password: {
      trim: true,
      type: String,
      required: true,
    },
    username: {
      trim: true,
      type: String,
      unique: true,
      required: true,
    },
    fullname: {
      trim: true,
      type: String,
      required: true,
    },
    role: {
      trim: true,
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("Users", UserSchema);
