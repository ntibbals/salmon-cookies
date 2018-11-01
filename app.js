'use strict';
var stores = [];
var hoursOfOps = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'];
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
  for (var i = 0; i < hoursOfOps.length; i++) {
    var randomCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    this.custPerHour.push(randomCust);
    console.log(randomCust);
  }
},
Store.prototype.generateHourlySales = function () {
  //line below will popluate custPerHour Array
  this.generateRandomCustPerHour();
  for (var i = 0; i < hoursOfOps.length; i++) {
    var perHour = Math.round(this.custPerHour[i] * this.avgSale);
    this.cookiesPerHour.push(perHour);
    //this.dailyTotal= this.dailyTotal + perHour
    this.dailyTotal += perHour;
    console.log(perHour);
  }
};


Store.prototype.render = function () {
  // this.generateHourlySales();
  var tbodyEl = document.getElementById('tbl-body'); ///anchors to html page
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th'); ///create table row element tag
  tbodyEl.appendChild(trEl);
  thEl.textContent = this.name;
  trEl.appendChild(thEl);
  for (var i = 0; i < hoursOfOps.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesPerHour[i];
    trEl.appendChild(tdEl);

  }
  var tdElTotals = document.createElement('td');
  tdElTotals.textContent = this.dailyTotal;
  trEl.appendChild(tdElTotals);
  


};

function createHead() {
  var tableHeadElement = document.getElementById('tbl-head');
  var trEl = document.createElement('tr');
  var tdElTotals = document.createElement('td');
  tdElTotals.textContent = 'Locations';
  trEl.appendChild(tdElTotals);
  tableHeadElement.appendChild(trEl);
  for (var i = 0; i < hoursOfOps.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = this.hoursOfOps[i];
    trEl.appendChild(thEl);
  }
  var thElTotalTitle = document.createElement('th');
  thElTotalTitle.textContent = 'Daily Totals';
  trEl.appendChild(thElTotalTitle);
}
function createFoot() {
  var tableFootElement = document.getElementById('tbl-foot');
  var trEl = document.createElement('tr');
  var tdElTotalsPerHour = document.createElement('td');
  tdElTotalsPerHour.textContent = 'Total per Hours row';
  trEl.appendChild(tdElTotalsPerHour);
  tableFootElement.appendChild(trEl);
  for (var i = 0; i < hoursOfOps.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = [];
    trEl.appendChild(thEl);
  }
  var thElTotalFoot = document.createElement('th');
  thElTotalFoot.textContent = 'Placeholder';
  trEl.appendChild(thElTotalFoot);
}
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
}
createTable();

console.log(createTable);
new Store('1st and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);
createHead();
createFoot();


