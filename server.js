const express = require("express");
const bodyParser = require("body-parser");

const routerCategory = require("./routes/category");
const routerCompany = require("./routes/company");
const routerProduct = require("./routes/product");
const routerUser = require("./routes/user");
const app = express();

app.use(bodyParser.json());

//middleware  --> to make code moduler
app.use(routerCategory);
app.use(routerCompany);
app.use(routerProduct);
app.use(routerUser);
app.get("/", (request, response) => {
  response.send("welcome to server application");
});

app.listen(3000, "0.0.0.0", () => {
  console.log("server listening on port 3000");
});
