const { Schema, model } = require("../config/db");

const ArticlesSchema = new Schema(
  {
    title: {
      trim: true,
      type: String,
      required: true,
    },
    author: {
      trim: true,
      type: String,
      required: true,
    },
    body: {
      trim: true,
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
    headerImageUrl: {
      trim: true,
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("Articles", ArticlesSchema);
