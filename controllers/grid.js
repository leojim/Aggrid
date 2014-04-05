var _ = require('underscore');
var async = require('async');
var crypto = require('crypto');
var nodemailer = require('nodemailer');
var passport = require('passport');
var Grid = require('../models/Grid');
var secrets = require('../config/secrets');

exports.createGrid = function(req, res, next) {
  req.assert('row', 'At most 4 rows currently').len(1, 4);
  req.assert('col', 'At most 5 columns currently').len(1, 5);

  var errors = req.validationErrors();

  if (errors) {
    req.flash('errors', errors);
    return res.redirect('/');
  }

  var grid = new Grid({
    user_id: req.user._id,
    name: req.body.name,
    user_name: req.body.user_name,
    row: req.body.row,
    col: req.body.col,
  });

  var gridModel = new Grid();
  gridModel.createGrid(req.user._id, req.body.name, req.body.user_name, req.body.row, req.body.col, function(err, doc) {
    if (err) {
      if (err.code === 11100) {
        req.flash('errors', { msg: 'Grid already exists.' });
      }
      return res.redirect('/');
    }
  });
};

exports.updateGrid = function(req, res, next) {
  req.assert('row', 'At most 4 rows currently').len(1, 4);
  req.assert('col', 'At most 5 columns currently').len(1, 5);

  var errors = req.validationErrors();

  if (errors) {
    req.flash('errors', errors);
    return res.redirect('/');
  }

  var grid = new Grid({
    user_id: req.user._id,
    name: req.body.name,
    user_name: req.body.user_name,
    row: req.body.row,
    col: req.body.col,
  });

  grid.save(function(err) {
    if (err) return next(err);
    //req.flash('success', { msg: 'Grid updated.' });
    //res.redirect('/');
  });
};

// exports.getGrids = function()