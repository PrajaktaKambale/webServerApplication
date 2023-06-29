const express = require("express");

const db = require("../db");
//router will  be used to add routes in the app server
const router = express.Router();

//**** category routes*** */
router.get("/category", (request, response) => {
  const statement = `select id,title,description from category`;
  db.execute(statement, (error, data) => {
    response.send(data);
  });
  // response.send("list of categories");
});

router.post("/category", (request, response) => {
  const { title, description } = request.body;
  const statement = `insert into product(title,description)values('${title}','${description}')`;
  db.execute(statement, (error, data) => {
    //response.send(data);
    response.send("created product");
  });
});
router.put("/product/:id", (request, response) => {
  const { id } = request.params;
  const { title, description } = request.body;
  const statement = `update product set title='${title}',description='${description}'where id = ${id}`;
  db.execute(statement, (error, data) => {
    response.send("updated product");
  });
});

router.delete("/product/:id", (request, response) => {
  const { id } = request.params;
  const statement = `delete from product where id = ${id}`;
  db.execute(statement, (error, data) => {
    response.send("deleted product");
  });
});

//export the router having all the routes related to the category
module.exports = router;
