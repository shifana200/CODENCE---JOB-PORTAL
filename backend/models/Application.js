const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: true,
    },

    companyId: String,

    candidateUserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    applicationEmail: String,

    status: {
      type: String,
      enum: ["applied", "shortlisted", "interviewing", "selected", "rejected"],
      default: "applied",
    },

    stage: String, // e.g., "HR Round", "Tech Round"

    score: Number,

    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },

    attachments: [
      {
        name: String,
        url: String,
      },
    ],

    appliedAt: Date,
    shortlistedAt: Date,
    interviewingStartedAt: Date,
    decidedAt: Date,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Application", applicationSchema);