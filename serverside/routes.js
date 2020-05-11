module.exports = app => {
    const news = require("./controller/module.controller.js");
    //Create news:
    app.post("/news", news.create); 
    //Fetch all news:
    app.get("/news", news.getAll);
}