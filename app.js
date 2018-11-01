var stores = [];
var hoursOfOps = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'];
var hourlyTotalSales = [];
function Store(name, minCust, maxCust, avgSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.custPerHour = [];
  this.cookiesPerHour = [];
  this.dailyTotal = 0;
  stores.push(this);
  this.generateHourlySales(); // call function in the right place to run
  this.render();
  // this.render();
}
Store.prototype.generateRandomCustPerHour = function () {
  for (var i = 0; i < hoursOfOps.length; i++) {
    var randomCust = Math.ceil(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    this.custPerHour.push(randomCust);
    console.log(randomCust);
  }
},
Store.prototype.generateHourlySales = function () {
  //line below will popluate custPerHour Array
  this.generateRandomCustPerHour();
  for (var i = 0; i < hoursOfOps.length; i++) {
    var perHour = Math.ceil(this.custPerHour[i] * this.avgSale);
    this.cookiesPerHour.push(perHour);
    this.dailyTotal += perHour;
    console.log(perHour);
    console.log(this.cookiesPerHour);
    hourlyTotalSales.push(this.cookiesPerHour[i]);
    // for (var j = 0; j < this.custPerHour.length; j++)
    //   var hourOfCookies = this.cookiesPerHour[0] + perHour;
    // console.log(hourOfCookies);
    // console.log(hourlyTotalSales);
    // // console.log(hourlyTotalSales);
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
  tdElTotalsPerHour.textContent = 'Hourly Totals';
  trEl.appendChild(tdElTotalsPerHour);
  tableFootElement.appendChild(trEl);
  // for (var j = 0; j < hoursOfOps.length; j++)
  //   var hourOfCookies = hourlyTotalSales[j];
  // console.log(hourOfCookies);
  // hourlyTotalSales.push(hourOfCookies);
  // console.log(hourlyTotalSales);
  // console.log(hourlyTotalSales);
  for (var i = 0; i < hoursOfOps.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = hourlyTotalSales[i];
    trEl.appendChild(tdEl);
  }
  var thElTotalFoot = document.createElement('th');
  thElTotalFoot.textContent = '';
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

var formReset = document.getElementById('form-data');
formReset.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log(event.target.newAvgSale.value);


  var newStore = event.target.newStore.value;
  var newMinCust = event.target.newMin.value;
  var newMaxCust = event.target.newMax.value;
  var newAvgSale = event.target.newAvgSale.value;

  var pNewStore = document.createElement('tr');
  var pNewMinCust = document.createElement('p');
  var pNewMaxCust = document.createElement('p');
  var pNewAvgSale = document.createElement('p');

  pNewStore.textContent = newStore;
  pNewMinCust.textContent = newMinCust;
  pNewMaxCust.textContent = newMaxCust;
  pNewAvgSale.textContent = newAvgSale;

  // var resultsEl = document.getElementById('result'); //

  // resultsEl.appendChild(pNewStore);
  // resultsEl.appendChild(pNewMinCust);
  // resultsEl.appendChild(pNewMaxCust);
  // resultsEl.appendChild(pNewAvgSale);
  event.target.store = new Store(newStore, newMinCust, newMaxCust, newAvgSale);
  console.log(Store);
});
