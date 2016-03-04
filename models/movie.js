var db = require('./db');



var Movie = function(movie){
    this.title = movie.title ? movie.title : '';
    this.time = movie.time ? movie.time : new Date();;
    this.desc = movie.desc ? movie.desc : '';
    this.other_name = movie.oName ? movie.oName:'';
    this.language = movie.language ? movie.language:'';
    this.area = movie.area ? movie.area : '';
    this.type = movie.type ? movie.type : '';
    this.rank = movie.rank ? movie.rank : 1;
    this.movie = [this.title,this.desc,this.other_name,this.time,this.language,this.area,this.type,this.rank];
}

module.exports =Movie;

var insertQuery = "INSERT INTO `db_movie`.`cjd_movie` (`title`, `desc`, `other_name`, `push_time`, `language`, `area`, `type`, `rank`, `id`)VALUES (?,?,?,?,?,?,?,?,0)";
var selectQuery = "SELECT count(*) as count FROM cjd_movie where title=?";

Movie.prototype.save = function save(callback) {
    db.connect();
    db.query(insertQuery,this.movie,function(err,result){
        if(err){
            callback(err);
        }
        callback(null,result);
    });
    db.end();
}

Movie.prototype.search = function search(title,callback){
    db.connect();
    db.query(selectQuery,title,function(err,result){
        if(err){
            callback(err);
        }
        callback(null,result);
    });
    db.end()
}








