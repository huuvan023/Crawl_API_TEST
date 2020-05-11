const sql = require('./db.js');

//constructor
const News = function(news) {
    this.id = news.id;
    this.link = news.link;
    this.title = news.title;
    this.created_time = news.created_time;
    this.img = news.img;
    this.img_discription = news.img_discription;
};

//create
News.create = ( newNews, result ) => {
    sql.query("INSERT INTO news SET ? ", newNews, ( err, res ) => {
        if ( err ) {
            console.log("Error: ",err);
            result(err,null);
            return;
        };
        console.log("Created news! ", { id: res.insertId, ...newNews});
        result(null, { id: res.insertId, ...newNews });
    } );
};
//fetch All
News.getAll = result => {
    sql.query("SELECT * FROM news", ( err, res ) => {
        if ( err ) {
            console.log("Error: ",err);
            result(null, err);
            return;
        };
        console.log("Youre fetched all news!");
        result(null, res);
    });
};

module.exports = News;
