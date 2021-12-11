const Mongoose = require("mongoose");

const database = Mongoose.connection;

database.once("open", () => {
  console.log("You have successfully connected to your database");
});

const connect = async () => {
  const { DB_HOST, DB_PORT, DB_NAME } = process.env;
  await Mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(
    `Connected to database on : mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`
  );
};

module.exports = {
  connect,
};
