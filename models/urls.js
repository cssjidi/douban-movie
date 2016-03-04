var config = require('../config');

var Urls = function(urls,filter){
    this.urls = urls ? urls : config.info_url;
    this.filter = filter ? filter : config.filter;
    this.dList = [];
}

module.exports = new Urls();

Urls.prototype.getList = function getList(){
    var i = 0;
    var len = this.filter.length;
    var urls = [];
    for(;i<len;i++){
        urls.push(this.urls.replace('%d',this.filter[i]));
    }
    return urls;
}


Urls.prototype.getDetailList = function getDetailLis(obj,callback){
    var i = 0;
    var len = this.dList.length;
    for(;i<len;i++){
        if(this.dDlist[i] == obj){
            callback(this.dList);
        }else{
            this.dList.push(obj);
            callback(this.dList);
        }
    }
}