var _ = require('lodash')

var RecordStore = function(name, city){
  this.name = name;
  this.city = city;
  this.records = [];
  this.balance = 0;
}

RecordStore.prototype = {
  addRecord: function(record){
    this.records.push(record);
  },
  listInventory: function(){
    var list = ""
    for(record of this.records){
      list += record.artist + ": " + record.title + ", £" + record.price + " | Copies: "+ record.copies + "\n";
    }
    console.log(list);
    return list;
  },
  sellRecord: function(record){
    this.balance += record.price;
    record.copies -= 1;
    if(record.copies === 0){
      _.remove(this.records, function(item){
        return item.title === record.title;
      });
    }
  },
  inventoryValue: function(){
    var value = 0;
    for(record of this.records){
      value += record.price * record.copies;
    }
    return value;
  },
  reportFinances: function(){
    return "Cash Balance: £" + this.balance + ", Inventory Value: £" + this.inventoryValue();
  },
}


var recordStore1 = new RecordStore("Rockin Records", "Chicago");
// 
// console.log(recordStore1);


module.exports.RecordStore = RecordStore;
