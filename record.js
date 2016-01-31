var _ = require('lodash')

var Record = function(artist, title, price, copies){
  this.artist = artist;
  this.title = title;
  this.price = price;
  this.copies = copies;
}

var record1 = new Record("Green Day", "American Idiot", 4.99, 1);
var record2 = new Record("Pink Floyd", "The Wall", 7.99, 1);
var record3 = new Record("Jay-Z", "The Black Album", 6.50, 1);

// console.log(record1, record2, record3);

module.exports.Record = Record;
