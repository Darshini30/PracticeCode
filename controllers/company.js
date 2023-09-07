const Company = require("../models/company");

module.exports.createCompany = async (req, res) => {
  const { name } = req.body;
  const newCompany = new Company({ name });
  try {
    await newCompany.save();
        res
      .status(201)
      .json({ message: "New company created successfully!", newCompany });
  } catch (error) {
    console.log(error);
        res.status(500).json(error);
  }
};