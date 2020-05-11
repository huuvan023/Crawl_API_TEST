const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//bodyParser request of content-type: application/json
app.use(bodyParser.json());
//bodyParser request of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended:true }));

//simple routes
/*app.get("/",(req,res) => {
    res.json({ message: "Welcome!" });
});
*/
require("./serverside/routes.js")(app);
app.listen( 3001,() =>{
    console.log("Welcome to my server");
});