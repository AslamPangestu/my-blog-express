//https://hackmd.io/@abernier/SJ2COSLRS?type=view
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const {
  CLOUDINARY_NAME,
  CLOUDINARY_KEY,
  CLOUDINARY_SECRET,
  CLOUDINARY_FOLDER,
} = process.env;

cloudinary.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_KEY,
  api_secret: CLOUDINARY_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: CLOUDINARY_FOLDER, // The name of the folder in cloudinary
    allowed_formats: ["jpg", "png"],
  },
});

const cloudinaryConfig = multer({ storage: storage });

module.exports = cloudinaryConfig;
