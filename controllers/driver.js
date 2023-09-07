const { body, validationResult } = require("express-validator");

const Driver = require("../models/driver");

module.exports.getDriver = async (req, res) => {
  try {
    const drivers = await Driver.find();
    res.status(200).json(drivers);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports.getDriverid = async (req, res) => {
  try {
    let delid = req.params.id;
    const drivers = await Driver.findOne({ _id: delid });

    if (drivers != null) {
      res.status(200).json(drivers);
    } else {
      console.log("Invalid name");
      res.status(500).send("Invalid name");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports.postDriver = [
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      console.log(error);
      res.status(400).json(error);
    } else {
      const {
        name,
        company,
        email,
        drivingLicenseNo,
        licenseIssueDate,
        licenseValidUpto,
        licenseType,
        driverImage,
        gender,
        bloodGroup,
        countryCode,
        mobileNo,
        dob,
        houseNo,
        streetName,
        landMark,
        country,
        state,
        city,
        postalCode,
        vendorName,
        dateOfJoining,
        attachments,
      } = req.body;

      const newDriver = new Driver({
        name,
        company,
        email,
        drivingLicenseNo,
        licenseIssueDate,
        licenseValidUpto,
        licenseType,
        driverImage,
        gender,
        bloodGroup,
        countryCode,
        mobileNo,
        dob,
        houseNo,
        streetName,
        landMark,
        country,
        state,
        city,
        postalCode,
        vendorName,
        dateOfJoining,
        attachments,
      });

      try {
        await newDriver.save();
        res.status(201).json(newDriver);
      } catch (error) {
        console.log(error);
        res.status(500).json(error);
      }
    }
  },
]

// module.exports.updateDriver = [

//     async (req, res) => {
//    try{
//        const error = validationResult(req);
//        if (!error.isEmpty()) {
//        console.log(error);
//        res.status(400).json(error);
//       }
//       else{

//       const {name,
//         company,
//         email,
//         drivingLicenseNo,
//         licenseType,
//         driverImage,
//         gender,
//         bloodGroup,
//         countryCode,
//         mobileNo,
//         country,
//         state,
//         city,
//         postalCode,
//         vendorName}=req.body;

//         const drivers = await Driver.findOneAndUpdate({_id:req.params.id},
//        {$set:{name,
//         company,
//         email,
//         drivingLicenseNo,
//         licenseType,
//         driverImage,
//         gender,
//         bloodGroup,
//         countryCode,
//         mobileNo,
//         country,
//         state,
//         city,
//         postalCode,
//         vendorName}},{new:true});
//      if(drivers!=null)
//      {
//         res.status(200).json(drivers);
//      }else{
//         console.log("Invalid name");
//       res.status(500).send("Invalid name");
//      }

//     }} catch (error) {
//       console.log(error);
//       res.status(500).json(error);
//     }
//   }
// ]
// module.exports.deleteDriver = async (req, res) => {
//     try {
//       let delid=req.params.id;

//      const drivers = await Driver.findOneAndDelete({_id:delid});
//      if(drivers!=null)
//      {
//         res.status(200).json(drivers);
//      }else{
//         console.log("Invalid name");
//       res.status(500).send("Invalid name");
//      }

//     } catch (error) {
//       console.log(error);
//       res.status(500).json(error);
//     }
//   };

//   module.exports.getDriverbyid = async (req, res) => {
//     try {
//       let delid=req.params.id;

//      const drivers = await Driver.findOne({_id:delid});
//      if(drivers!=null)
//      {
//         res.status(200).json(drivers);
//      }else{
//         console.log("Invalid name");
//       res.status(500).send("Invalid name");
//      }

//     } catch (error) {
//       console.log(error);
//       res.status(500).json(error);
//     }
//   };
