// const mongoose = require("mongoose");

// // const url =
// //   "mongodb+srv://nxtyuga:nxtyuga@cluster0.3kghnck.mongodb.net/?retryWrites=true&w=majority";

// mongoose.connect(process.env.DB).then(() => {
//   console.log("Connected to MongoDB");
// });

const mongoose = require("mongoose");

mongoose.connect(process.env.DB).then(() => {
  console.log("Connected to MongoDB");
});

// module.exports = mongoose;