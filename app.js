const express = require("express");
const db = require("./config/database");
var cors = require('cors')
const bodyparser = require('body-parser')
const templateRouter = require('./routes/templates')
const userRouter = require('./routes/users')

db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(() => {
    console.error("Unable to connect to the database:", error);
  });

const app = express();
app.use(cors())

app.use(bodyparser.json())

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.use('/templates', templateRouter)
app.use('/users', userRouter)

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
