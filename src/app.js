const express = require("express");
const app = express();

const { Contacts } = require("./routes");

const loaders = require("./loaders");
const config = require("./config");

config();
loaders();

app.use(express.json());

app.listen(process.env.APP_PORT, () => {
  console.log(`Listening on port ${process.env.APP_PORT}`);

  app.use("/contacts", Contacts);
});
