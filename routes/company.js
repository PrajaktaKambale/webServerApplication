const express = require("express");

const db = require("../db");
//router will  be used to add routes in the app server
const router = express.Router();

//**** company routes*** */
router.get("/company", (request, response) => {
  const statement = `select id,title,description from company`;
  db.execute(statement, (error, data) => {
    response.send(data);
  });
  // response.send("list of categories");
});

router.post("/company", (request, response) => {
  const { title, description } = request.body;
  const statement = `insert into company(title,description)values('${title}','${description}')`;
  db.execute(statement, (error, data) => {
    //response.send(data);
    response.send("created company");
  });
});
router.put("/company/:id", (request, response) => {
  const { id } = request.params;
  const { title, description } = request.body;
  const statement = `update company set title='${title}',description='${description}'where id = ${id}`;
  db.execute(statement, (error, data) => {
    response.send("updated company");
  });
});

router.delete("/company/:id", (request, response) => {
  const { id } = request.params;
  const statement = `delete from company where id = ${id}`;
  db.execute(statement, (error, data) => {
    response.send("deleted company");
  });
});

//export the router having all the routes related to the company
module.exports = router;
