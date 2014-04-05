var _ = require('underscore');
var async = require('async');
var crypto = require('crypto');
var nodemailer = require('nodemailer');
var passport = require('passport');
var User = require('../models/User');
var Grid = require('../models/Grid');
var secrets = require('../config/secrets');
var graph = require('fbgraph');
var Linkedin = require('node-linkedin')(secrets.linkedin.clientID, secrets.linkedin.clientSecret, secrets.linkedin.callbackURL);

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
      
	  var resInfo_FB = {};
	  var resInfo_LI = {};

	  //Linkedin
	  

	  async.parallel({
	    facebook1: function(done) {
	      var token = _.findWhere(req.user.tokens, { kind: 'facebook' });
	      if (token == null) {
	      	done(err, null);
	      	return;
	      }
	      graph.setAccessToken(token.accessToken);
	      graph.get(req.user.facebook, function(err, me) {
	      	resInfo_FB.me = me;
	        done(err, me);
	      });
	    },
	    facebook2: function(done) {
	      var token = _.findWhere(req.user.tokens, { kind: 'facebook' });
	      if (token == null) {
	      	done(err, null);
	      	return;
	      }
	      graph.setAccessToken(token.accessToken);
	      graph.get(req.user.facebook + '/friends', function(err, friends) {
	      	resInfo_FB.b = friends.data;
	        done(err, friends.data);
	      });
	    },
	    linkedin1 : function(done) {
	    	var token = _.findWhere(req.user.tokens, { kind: 'linkedin' });
	    	if (token == null) {
	      	  done(err, null);
	      	  return;
	        }
	        var linkedin = Linkedin.init(token.accessToken);
	    	linkedin.people.me(function(err, $in) {
		      if (err) return next(err);
		      resInfo_LI = $in;
		      console.log(resInfo_LI);
		      done(err, $in);
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
          resInfo_FB: resInfo_FB,
          resInfo_LI: resInfo_LI
  	    });
      });

      
    });
  }
};

