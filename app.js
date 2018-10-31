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
function generateTableHead (headArray) {
  var thEl = document.getElementById('tbl-thead');
  var locationName = document.createElement('tr');
  locationName.textContent = `${this.hoursOfOps}`;
  for (var i = 0; i < this.hoursOfOps.length; i++) { // length won't read? why?
    var tableHead = document.createElement('td');
    tableHead.textContent = headArray[i];
    thEl.appendChild(tableHead);
  }
}
generateTableHead(this.tableArray);
Store.prototype.render = function () {
  var tbodyEl = document.getElementbyID('store-table');
  var trEL = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = this.name;
  trEL.appendChild(thEl);
  for (var i = 0; i < this.hoursOfOperation.length; i++) {
    // var hourEl = document.createElement('td');
    var cookieEl = document.createElement('td');
    cookieEl.textContent = `${this.cookiesPerHour[i]}`;
    this.trEl.appendChild(cookieEl);
    this.mainEL.appendChild(this.trEl);
    var dailySumEl = document.createElement('th1');
    this.trEl.appendChild(dailySumEl);
    this.trEL.appendChild(this.tbodyEl);
  }

};
console.log(createTable);
new Store('1st and Pike', 23, 65, 6.3);
stores[0].generateHourlySales();
// stores[0].render();
new Store('SeaTac Airport', 3, 24, 1.2);
stores[1].generateHourlySales();
new Store('Seattle Center', 11, 38, 3.7);
stores[2].generateHourlySales();
new Store('Capitol Hill', 20, 38, 2.3);
stores[3].generateHourlySales();
new Store('Alki', 2, 16, 4.6);
stores[4].generateHourlySales();
