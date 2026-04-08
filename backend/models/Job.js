const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    companyId: String,

    postedByRecruiterId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    title: {
      type: String,
      required: true,
    },

    department: String,

    location: String,

    employmentType: String,

    experienceLevel: String,

    responsibilities: [String],

    requirements: [String],

    niceToHave: [String],

    salary: {
      min: Number,
      max: Number,
      currency: String,
    },

    visibility: {
      type: String,
      default: "public",
    },

    applicationEmail: String,

    publishedAt: Date,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Job", jobSchema);