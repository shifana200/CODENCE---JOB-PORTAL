const mongoose = require("mongoose");

const interviewTemplateSchema = new mongoose.Schema(
  {
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
    },

    name: String,

    timezone: String,

    slotDurationMinutes: Number,

    rounds: [
      {
        roundNumber: Number,
        type: {
          type: String,
          enum: ["mcq", "live_coding"],
        },
      },
    ],

    isActive: {
      type: Boolean,
      default: true,
    },

    visibility: String,

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("InterviewTemplate", interviewTemplateSchema);