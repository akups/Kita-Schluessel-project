const mongoose = require("mongoose");

//mongoose.set("useNewUrlParser", true);
//mongoose.set("useFindAndModify", false);
//mongoose.set("useCreateIndex", true);
//mongoose.set("useUnifiedTopology", true);

mongoose
  .connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true },
    { useFindAndModify: false },
    { useCreateIndex: true },
    { useUnifiedTopology: true }
  )
  .then((conn) => {
    console.log(`Connected to ${conn.connections[0].name}`);
  })
  .catch((err) => {
    console.log(`Error connecting to the DB: ${err}`);
  });

module.exports = {
  disconnect: () => {
    mongoose.connection.close();
  },
};
