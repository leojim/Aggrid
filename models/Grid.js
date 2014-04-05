var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');
var Base = require("./base");
var ObjectId = Base.Schema.ObjectId;
var Mixed = Base.Schema.Types.Mixed;
var async = require("async");
var util = require("util");
/**
 * Grid schema
 * @type {exports.Schema}
 */
var gridSchema = new mongoose.Schema({
    user_id: ObjectId,
    name: String,
    //email: { type: String, unique: true, lowercase: true },
    logo_name: String,
    url: String,
    head_url: String,
    user_name: String,
    token: String,
    friend_number: {
        type: Number,
        default: 0
    },
    notification_number: {
        type: Number,
        default: 0
    },
    color: String,
    row: Number,
    col: Number,
    size_x: {
        type: Number,
        default: 1
    },
    size_y: {
        type: Number,
        default: 1
    }
});

mongoose.model('Grid', gridSchema);
/**
 * Grid model.
 * @constructor
 */
var GridModel = function() {
    Base.Model.call(this);
    this.model = Base.Mongoose.model("Grid", "Grid");
};
// Inherit GridModel from BaseModel
util.inherits(GridModel, Base.Model);
/**
 * create a new grid.
 *
 *     // usage: var gridModel = new GridModel();
 *     //        gridModel.createGrid(userId, name, userName, function(err, doc) {
 *     //            //...
 *     //        });
 *
 * @param userId
 * @param name
 * @param userName
 * @param callback
 */
GridModel.prototype.createGrid = function(userId, name, userName, row, col, callback) {
    var data = {
        user_id: userId,
        name: name,
        user_name: userName,
        row: row,
        col: col
    };
    var self = this;
    async.waterfall([
        function(callback) {
            self.model.create(data, function(err, doc) {
                if (err) {
                    callback(err);
                } else if (doc === undefined || doc === null || doc.length === 0) {
                    callback(new Error("Can't create document."));
                } else {
                    callback(null, doc.toJSON());
                }
            });
        }
    ], function(err, doc) {
        callback(err, doc);
    });
};

/**
 * get all grids of one user.
 *
 *     // usage: var gridModel = new GridModel();
 *     //        gridModel.getGrids(userId, function(err, docs) {
 *     //            //...
 *     //        });
 *
 * @param userId
 * @param callback
 */
GridModel.prototype.getGrids = function(userId, callback) {
    var data = {
        user_id: userId
    };
    var self = this;
    async.waterfall([
        function(callback) {
            self.model.find(data, function(err, docs) {
                if (err) {
                  console.log(err);
                    callback(err);
                //} else if (doc === undefined || doc === null || doc.length === 0) {
                //    callback(new Error("Can't create document."));
                } else {
                    console.log(docs.length);
                    for (var i = 0; i < docs.length; i++) {
                      docs[i] = docs[i].toJSON();
                    }
                    callback(null, docs);
                }
            });
        }
    ], function(err, doc) {
        callback(err, doc);
    });
};

module.exports = GridModel;