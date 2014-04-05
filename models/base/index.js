/**
 * Created by XadillaX on 2014/4/5.
 */
var mongoose = require("mongoose");
var config = {
    secret  : require("../../config/secrets")
};

/**
 * base model.
 * @constructor
 */
var BaseModel = function() {
    // you have to create it.
    // eg. this.model = baseModel.createModel(name, structure);
    this.model = null;
};

exports.Model = BaseModel;
exports.Mongoose = mongoose;
exports.Schema = mongoose.Schema;

/**
 * connect to the database (mongodb)
 */
exports.connect = function() {
    var connectionUri = config.secret.db;

    console.log("✔ The connection uri: " + connectionUri + ".");
    mongoose.connect(connectionUri, {
        server: {
            poolSize: 4
        }
    }, function(err) {
        if(err) {
            console.error("✗ MongoDB Connection Error: " + err.message);
            process.exit(1);
        }
    });
};
