const mongoose = require("mongoose");

const companySchema = mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Company = mongoose.model("company", companySchema);

module.exports = Company;