const express = require("express");

const db = require("../db");
//router will  be used to add routes in the app server
const router = express.Router();

//**** user routes*** */
router.get("/user", (request, response) => {
  const statement = `select id,title,description from user`;
  db.execute(statement, (error, data) => {
    response.send(data);
  });
  // response.send("list of categories");
});

router.post("/user", (request, response) => {
  const { title, description } = request.body;
  const statement = `insert into user(title,description)values('${title}','${description}')`;
  db.execute(statement, (error, data) => {
    //response.send(data);
    response.send("created user");
  });
});
router.put("/user/:id", (request, response) => {
  const { id } = request.params;
  const { title, description } = request.body;
  const statement = `update user set title='${title}',description='${description}'where id = ${id}`;
  db.execute(statement, (error, data) => {
    response.send("updated user");
  });
});

router.delete("/user/:id", (request, response) => {
  const { id } = request.params;
  const statement = `delete from user where id = ${id}`;
  db.execute(statement, (error, data) => {
    response.send("deleted user");
  });
});

//export the router having all the routes related to the user
module.exports = router;
