const v2 = require("cloudinary").v2;
const cloudinary = v2;

cloudinary.config({
  cloud_name: "dlrzuxgpm",
  api_key: "416584965585287",
  api_secret: "ToKvGK67KI7-R91-t-h7HIBGy54",
});

const cloudinaryUpload = async (file) => {
  try {
    const result = await cloudinary.uploader.upload(file, {
      resource_type: "auto",
    });
    console.log(result.url);
    return result.url;
  } catch (error) {
    console.log(error);
  }
};

module.exports = cloudinaryUpload