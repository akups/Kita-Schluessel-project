/* const mongoose = require("mongoose");

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

const Kita = require("./models/Kita");

mongoose
  .connect("mongodb://localhost:27017/backend")
  .then(conn => {
    console.log(`Connected to ${conn.connections[0].name}`);

    Kita.find({}).then(result => {
      let missingName = [];
      let onlyNames = result.map(ele => {
        if (!ele.name) missingName.push(ele);
        return ele.name;
      });

      let kitasDuplicates = [];

      onlyNames.forEach((ele, index) => {
        // console.log(ele);
        if (onlyNames.lastIndexOf(ele) > index) {
          kitasDuplicates.push(ele);
        }
      });

      console.log(kitasDuplicates, kitasDuplicates.length);
      console.log("MISSING NAMES", missingName.length);

      mongoose.connection.close();
    });
  })
  .catch(err => {
    console.log(`Error connecting to the DB: ${err}`);
  });
 */
