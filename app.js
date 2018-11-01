var stores = [];
var hoursOfOps = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'];
// var hourlyTotalSales = [];
function Store(name, minCust, maxCust, avgSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.custPerHour = [];
  this.cookiesPerHour = [];
  this.dailyTotal = 0;
  stores.push(this);
  this.render();
  createFoot();
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
  }
};
Store.prototype.render = function () {
  this.generateHourlySales();
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
  var thElLocationsTitle = document.createElement('th');
  thElLocationsTitle.textContent = 'Locations';
  trEl.appendChild(thElLocationsTitle);
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

  var tfootElBomb = document.getElementById ('tbl-foot');
  if(tfootElBomb) {
    tfootElBomb.remove();
  }
  
  var tableFootElement = document.getElementById('store-table');
  var tfootEl = document.createElement('tfoot');
  var trEl = document.createElement('tr');
  tfootEl.id = 'tbl-foot';
  var tdElTotalsPerHour = document.createElement('td');
  tdElTotalsPerHour.textContent = 'Hourly Totals';
  trEl.appendChild(tdElTotalsPerHour);
  tfootEl.appendChild(trEl);
  var grandTotal = 0;
  for (var i = 0; i < hoursOfOps.length; i++) {
    var tdEl = document.createElement('td');
    var totals = 0;
    for( var j = 0; j < stores.length; j++ ) {
      totals += stores[j].cookiesPerHour[i];
    }
    tdEl.textContent = totals;
    trEl.appendChild(tdEl);
    grandTotal+= totals;
  }
  var grandTotalEl = document.createElement('td');
  grandTotalEl.textContent = grandTotal;
  trEl.appendChild(grandTotalEl);
  tfootEl.appendChild(trEl);
  tableFootElement.appendChild(tfootEl);

}
function createTable() {
  var mainEl = document.getElementById('pikestore');
  var tblEl = document.createElement('table');
  var theadEl = document.createElement('thead');
  var tbodyEl = document.createElement('tbody');

  tblEl.id = 'store-table';
  theadEl.id = 'tbl-head';
  tbodyEl.id = 'tbl-body';
  tblEl.className = 'tbl';
  mainEl.appendChild(tblEl);
  tblEl.appendChild(theadEl);
  tblEl.appendChild(tbodyEl);
}
createTable();
createHead();
console.log(createTable);
new Store('1st and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);
var formReset = document.getElementById('form-data');
formReset.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log(event.target.newAvgSale.value);
  var newStore = event.target.newStore.value;
  var newMinCust = event.target.newMin.value;
  var newMaxCust = event.target.newMax.value;
  var newAvgSale = event.target.newAvgSale.value;
  event.target.store = new Store(newStore, newMinCust, newMaxCust, newAvgSale);
  event.target.newStore.value ='';
  event.target.newMin.value = '';
  event.target.newMax.value = '';
  event.target.newAvgSale.value = '';
  console.log(Store);
});
