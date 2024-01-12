const mongoose = require("mongoose");

const connection = async () => {
  try {
    const con = await mongoose.connect(
      "mongodb+srv://vasukotadiya224:ZnbujRS3Vm5sHJSz@cluster0.baqiyze.mongodb.net/spotify?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`MongoDB Connected :${con.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
module.exports = connection;
