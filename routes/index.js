var express = require('express');
var router = express.Router();
var movie = require('../models/movie.js');
var db = require('../models/db');
var Movie = require('../models/movie');
var Urls = require('../models/urls');
var async = require('async');
var http = require('http');
var request = require('request');
var cheerio = require('cheerio');
var Dom = require('../models/dom.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '首页' });
});

var headers = {
  'accept-charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.3',
  'accept-language': 'en-US,en;q=0.8',
  'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/537.13+ (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2',
  'accept-encoding': 'gzip,deflate'
};

//var dom = new Dom();

async.eachSeries(Urls.getList(),function(item,callback){
  //console.log(item);
  request(item,function(err,res,body){
    //Dom(res);

      //console.log(typeof Dom.addList)
    Dom.addList(body,function(dList){
      console.log(dList);
    })

    //console.log(res);
  });
});


module.exports = router;
