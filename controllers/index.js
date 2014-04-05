var _ = require('underscore');
var async = require('async');
var crypto = require('crypto');
var nodemailer = require('nodemailer');
var passport = require('passport');
var User = require('../models/User');
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
    console.log('haha');
  }
};

