const mongoose = require("mongoose");

const wasteReportSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  location: { type: String, required: true },
  description: String,
  status: {
    type: String,
    enum: ["pending", "collected"],
    default: "pending"
  }
}, { timestamps: true });

module.exports = mongoose.model("WasteReport", wasteReportSchema);
