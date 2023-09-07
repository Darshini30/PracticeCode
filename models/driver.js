const mongoose = require("mongoose");

const driverSchema = mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "company",
    },
    drivingLicenseNo: {
      required: true,
      type: String,
    },
    driverImage: String,
    gender: {
      required: true,
      type: String,
      enum: ["Male", "Female", "Others"],
    },
    email: String,
    bloodGroup: {
      type: String,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    },
    countryCode: {
      required: true,
      type: String,
    },
    mobileNo: {
      required: true,
      type: String,
    },
    dob: {
      type: Date,
    },
    licenseType: {
      type: String,
      required: true,
    },
    licenseIssueDate: {
      type: Date,
    },
    licenseValidUpto: {
      type: Date,
    },
    houseNo: String,
    streetName: String,
    country: { type: String, required: true },
    state: { type: String, required: true },
    city: {
      type: String,
      required: true,
    },
    postalCode: {
      type: String,
      required: true,
    },
    vendorName: String,
    dateOfJoining: Date,
    attachments: [
      {
        type: String,
        description: String,
        url: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Driver = mongoose.model("driver", driverSchema);

module.exports = Driver;
