var _ = require('underscore');
var async = require('async');
var crypto = require('crypto');
var nodemailer = require('nodemailer');
var passport = require('passport');
var User = require('../models/User');
var Grid = require('../models/Grid');
var secrets = require('../config/secrets');
var graph = require('fbgraph');

/**
 * GET /index
 * Index page.
 */

exports.getIndex = function(req, res) {
  if (!req.user) {
    res.render('index', {
      title: 'Aggrid'
    });
  } else {
    var gridModel = new Grid();
    gridModel.getGrids(req.user._id, function(err, docs) {
      if (err) {
        req.flash('Error when get grids', err);
         console.log('haha');
        return;
        //return res.redirect('/');
      }
      console.log(docs);

      //facebook
      var token = _.findWhere(req.user.tokens, { kind: 'facebook' });
	  graph.setAccessToken(token.accessToken);
	  var resInfo_FB = {};

	  async.parallel({
	    getMe: function(done) {
	      graph.get(req.user.facebook, function(err, me) {
	      	resInfo_FB.me = me;
	        done(err, me);
	      });
	    },
	    getMyFriends: function(done) {
	      graph.get(req.user.facebook + '/friends', function(err, friends) {
	      	resInfo_FB.b = friends.data;
	        done(err, friends.data);
	      });
	    }
	  },
	  function(err, results) {
	    if (err) return next(err);
	    res.render('user_index', {
          title: 'Aggrid',
          grids: docs,
          //me: results.getMe,
          //friends: results.getMyFriends
          resInfo_FB: resInfo_FB
      	});
	  });
      
    });
  }
};

