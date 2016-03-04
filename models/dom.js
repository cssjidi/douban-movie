var cheerio = require('cheerio');
var Urls = require('./urls');

var Dom = function(res){
    if(res){
        console.log('链接不能为空');
        return false;
    }
    this.body = res;
}

module.exports = Dom;

Dom.addList = function(res,callback){
    //this.body = res;
    //console.log(res);
    var $$ = cheerio.load(res);
    console.log($$('#loading-div').html());
    $$('.fm-result-list').each(function(){
        var self = $$(this);
        var href = self.find('.fm-movie-cover a').attr('href');
        Urls.getDetailList(href,function(dList){
            callback(dList);
            //console.log(dList);
        });
    });
}

