const { Schema, model } = require("../config/db");

const ContactSchema = new Schema(
  {
    iconUrl: {
      trim: true,
      type: String,
      unique: true,
      required: true,
    },
    content: {
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

const EducationSchema = new Schema(
  {
    iconUrl: {
      trim: true,
      type: String,
      unique: true,
      required: true,
    },
    periode: {
      trim: true,
      type: String,
      required: true,
    },
    title: {
      trim: true,
      type: String,
      required: true,
    },
    content: {
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

const ExperienceSchema = new Schema(
  {
    iconUrl: {
      trim: true,
      type: String,
      unique: true,
      required: true,
    },
    periode: {
      trim: true,
      type: String,
      required: true,
    },
    title: {
      trim: true,
      type: String,
      required: true,
    },
    content: {
      trim: true,
      type: String,
      required: true,
    },
    role: {
      trim: true,
      type: String,
      required: true,
    },
    type: {
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

const ProfileSchema = new Schema(
  {
    fullname: {
      trim: true,
      type: String,
      unique: true,
      required: true,
    },
    jobTitle: {
      trim: true,
      type: String,
      required: true,
    },
    profileImageUrl: {
      trim: true,
      type: String,
    },
    description: {
      trim: true,
      type: String,
      required: true,
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
