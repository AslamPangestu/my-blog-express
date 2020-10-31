const Profile = require("../models/Profile");

exports.update = async (req, res) => {
  try {
    const {
      fullname,
      jobTitle,
      description,
      contacts,
      educations,
      experiences,
    } = req.body;

    const {
      profileImage,
      contactImages,
      educationImages,
      experienceImages,
    } = req.files;

    contacts.forEach((element, index) => {
      element.iconUrl = contactImages[index].path;
    });

    educations.forEach((element, index) => {
      element.iconUrl = educationImages[index].path;
    });

    experiences.forEach((element, index) => {
      element.iconUrl = experienceImages[index].path;
    });

    const docs = await Profile.find();
    let doc;
    if (docs.length === 0) {
      doc = new Profile({
        fullname,
        jobTitle,
        description,
        profileImageUrl: profileImage[0].path,
        contacts,
        educations,
        experiences,
      });
    } else {
      doc = await Profile.findById(docs[0]._id);
      doc.fullname = fullname;
      doc.jobTitle = jobTitle;
      doc.description = description;
      doc.profileImageUrl = profileImage[0].path;
      doc.contacts = contacts;
      doc.educations = educations;
      doc.experiences = experiences;
    }

    await doc.save();
    res.status(200).json({ message: "Success" });
  } catch (error) {
    console.error("ERR", error);
    res.status(500).json({
      message: "Internal Server Error",
      code: 500,
      error: error.message,
    });
  }
};
exports.getData = (req, res) => {
  res.json({ message: "Congratulations! you are working great!" });
};
