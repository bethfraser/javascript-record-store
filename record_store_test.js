var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var _ = require('lodash')


var RecordStore = require('./record_store').RecordStore;
var Record = require('./record').Record;

describe('Record Store', function(){

  it('can add records to its inventory', function(){
    var store = new RecordStore("Rockin Records", "Chicago");
    var record = new Record("Green Day", "American Idiot", 4.99, 1);
    store.addRecord(record);
    expect(store.records).to.deep.equal([record]);
  });

  it('can list its inventory', function(){
    var store = new RecordStore("Rockin Records", "Chicago");
    var record = new Record("Green Day", "American Idiot", 4.99, 1);
    var record2 = new Record("Pink Floyd", "The Wall", 7.99, 3);
    store.addRecord(record);
    store.addRecord(record2);
    expect(store.listInventory()).to.equal("Green Day: American Idiot, £4.99 | Copies: 1\nPink Floyd: The Wall, £7.99 | Copies: 3\n")
  });

  it('starts with a balance of 0', function(){
    var store = new RecordStore("Rockin Records", "Chicago");
    expect(store.balance).to.equal(0);
  });

  it('can sell an item, which increases the record store balance', function(){
    var store = new RecordStore("Rockin Records", "Chicago");
    var record = new Record("Green Day", "American Idiot", 4.99, 1);
    store.addRecord(record);
    store.sellRecord(record);
    expect(store.balance).to.equal(4.99);
  });

  it('should decrease number of copies by 1 when item is sold', function(){
    var store = new RecordStore("Rockin Records", "Chicago");
    var record = new Record("Green Day", "American Idiot", 4.99, 4);
    store.addRecord(record);
    store.sellRecord(record);
    expect(record.copies).to.equal(3);
  });

  it('should remove a record from stock list if it has 0 copies left', function(){
    var store = new RecordStore("Rockin Records", "Chicago");
    var record = new Record("Green Day", "American Idiot", 4.99, 1);
    store.addRecord(record);
    store.sellRecord(record);
    expect(store.records).to.deep.equal([]);
  });

  it('should be able to total the value of the inventory', function(){
    var store = new RecordStore("Rockin Records", "Chicago");
    var record = new Record("Green Day", "American Idiot", 4.99, 1);
    var record2 = new Record("Pink Floyd", "The Wall", 7.99, 3);
    store.addRecord(record);
    store.addRecord(record2);
    expect(store.inventoryValue()).to.equal(28.96);
  });

  it('should be able to report on finances', function(){
    var store = new RecordStore("Rockin Records", "Chicago");
    var record = new Record("Green Day", "American Idiot", 4.99, 1);
    var record2 = new Record("Pink Floyd", "The Wall", 7.99, 3);
    store.addRecord(record);
    store.addRecord(record2);
    store.sellRecord(record2);
    expect(store.reportFinances()).to.equal("Cash Balance: £7.99, Inventory Value: £20.97");
  });

});