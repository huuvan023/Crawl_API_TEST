const News = require("./../model/news.model.js");

//Create and save News
exports.create = ( req, res ) => {
    //Validate
    if ( !req.body ) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    const news = new News({
        id : req.body.id,
        link : req.body.link,
        title : req.body.title,
        created_time : req.body.created_time,
        img : req.body.img,
        img_discription : req.body.img_discription,
    })

    //Save News
    News.create(news, ( err, data ) => {
        if ( err ) {
           res.status(500).send({
               message:
                err.message || "Some thing was occurred!"
           });
        }
        else {
            res.send(data);
        }
    });
}

//fetch all News

exports.getAll = ( req, res ) => {

    //getAll
    News.getAll( ( err, data ) => {
        if ( err ) {
            res.status(500).send({
                message: err.message || "Some thing was occurred! "
            });
        }
        else {
            res.send(data);
        }
    });

};