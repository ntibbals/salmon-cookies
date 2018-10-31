var stores = [];

function Store(name, minCust, maxCust, avgSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.custPerHour = [];
  this.cookiesPerHour = [];
  this.hoursOfOps = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'],
  this.dailyTotal = 0;
  stores.push(this);
  this.generateHourlySales(); // call function in the right place to run
  this.render();
  // this.render();
}
Store.prototype.generateRandomCustPerHour = function () {
  for (var i = 0; i < this.hoursOfOps.length; i++) {
    var randomCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    this.custPerHour.push(randomCust);
    console.log(randomCust);
  }
},
Store.prototype.generateHourlySales = function () {
  //line below will popluate custPerHour Array
  this.generateRandomCustPerHour();
  for (var i = 0; i < this.hoursOfOps.length; i++) {
    var perHour = Math.round(this.custPerHour[i] * this.avgSale);
    this.cookiesPerHour.push(perHour);
    //this.dailyTotal= this.dailyTotal + perHour
    this.dailyTotal += perHour;
    console.log(perHour);
  }
};

Store.prototype.render = function () {
  this.generateHourlySales();
  var tbodyEl = document.getElementById('tbl-body'); ///anchors to html page
  var trEl = document.createElement('tr'); ///create table row element tag
  tbodyEl.appendChild(trEl);
  var thEl = document.createElement('th'); // create table head element tag
  trEl.textContent = this.name;
  trEl.appendChild(thEl);
  for (var i = 0; i < this.hoursOfOps.length; i++) {
    // var hourEl = document.createElement('td');
    var tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesPerHour[i];
    trEl.appendChild(tdEl);
    var cookieEl = document.createElement('td');
    cookieEl.textContent = `${this.cookiesPerHour[i]}`;
    trEl.appendChild(cookieEl);
    var dailySumEl = document.createElement('th1');
  }
  thEl.textContent = this.hoursOfOps;
  trEl.appendChild(dailySumEl);
  tbodyEl.appendChild(trEl);
  tbodyEl.appendChild(thEl);
};

// function createHead() {
//   var tableHeaderElement = document.getElementById('thead');

// }
// function createFoot() {

// }
function createTable() {
  var mainEl = document.getElementById('pikestore');
  var tblEl = document.createElement('table');
  var theadEl = document.createElement('thead');
  var tbodyEl = document.createElement('tbody');
  var tfootEl = document.createElement('tfoot');
    
  tblEl.id = 'store-table';
  theadEl.id = 'tbl-head';
  tbodyEl.id = 'tbl-body';
  tfootEl.id = 'tbl-foot';
  tblEl.className = 'tbl';
  mainEl.appendChild(tblEl);
  tblEl.appendChild(theadEl);
  tblEl.appendChild(tbodyEl);
  tblEl.appendChild(tfootEl);
  // tbodyEl.appendChild(render)
    
}
createTable();
console.log(createTable);
new Store('1st and Pike', 23, 65, 6.3);
stores[0].render();
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

