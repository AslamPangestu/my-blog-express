const { Schema, model } = require("../config/db");

const ContactSchema = new Schema(
  {
    iconUrl: {
      trim: true,
      type: String,
      unique: true,
    },
    content: {
      trim: true,
      type: String,
    },
    link: {
      trim: true,
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const EducationSchema = new Schema(
  {
    iconUrl: {
      trim: true,
      type: String,
      unique: true,
    },
    periode: {
      trim: true,
      type: String,
    },
    title: {
      trim: true,
      type: String,
    },
    content: {
      trim: true,
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const ExperienceSchema = new Schema(
  {
    iconUrl: {
      trim: true,
      type: String,
      unique: true,
    },
    periode: {
      trim: true,
      type: String,
    },
    title: {
      trim: true,
      type: String,
    },
    content: {
      trim: true,
      type: String,
    },
    role: {
      trim: true,
      type: String,
    },
    type: {
      trim: true,
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const ProfileSchema = new Schema(
  {
    fullname: {
      trim: true,
      type: String,
      unique: true,
    },
    jobTitle: {
      trim: true,
      type: String,
    },
    profileImageUrl: {
      trim: true,
      type: String,
    },
    description: {
      trim: true,
      type: String,
    },
    contacts: {
      type: [ContactSchema],
      default: [],
    },
    educations: {
      type: [EducationSchema],
      default: [],
    },
    experiences: {
      type: [ExperienceSchema],
      default: [],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("Profile", ProfileSchema);
