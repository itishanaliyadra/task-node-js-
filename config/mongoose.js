const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://127.0.0.1/demo');
if (db) {
    console.log("DB is connect");
}
else {
    console.log("Db is not connect");
}
module.exports = db;