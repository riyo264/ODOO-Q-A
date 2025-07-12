const mongoose = require("mongoose");

const url =process.env.MONGO__URL;

const connect = async() => {
 await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};

module.exports=connect;