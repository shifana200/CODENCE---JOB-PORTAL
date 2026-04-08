const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    dob: Date,

    phone: String,

    place: String,

    roles: {
      type: [String],
      enum: ["candidate", "recruiter", "admin"],
      default: ["candidate"],
    },

    status: {
      type: String,
      default: "active",
    },

    socialLinks: [
      {
        platform: String,
        url: String,
      },
    ],

    experience: [
      {
        company: String,
        role: String,
        years: Number,
      },
    ],

    skills: [String],

    projects: [
      {
        title: String,
        description: String,
        link: String,
      },
    ],

    profilePic: {
      url: String,
      public_id: String,
    },

    resume: {
      url: String,
      public_id: String,
    },

    lastSeenAt: Date,
  },
  {
    timestamps: true, // createdAt & updatedAt automatically
  }
);

module.exports = mongoose.model("User", userSchema);