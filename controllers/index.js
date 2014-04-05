var _ = require('underscore');
var async = require('async');
var crypto = require('crypto');
var nodemailer = require('nodemailer');
var passport = require('passport');
var User = require('../models/User');
var Grid = require('../models/Grid');
var secrets = require('../config/secrets');

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
      res.render('user_index', {
        title: 'Aggrid',
        grids: docs
      });
    });
  }
};

