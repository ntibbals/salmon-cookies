// // var hoursOfOperation = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'];
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

  //   // var totalSum = this.perHour[i]; //placeholder
  //   // var totalListLayout = document.createElement('li');
  //   // container.appendChild(totalListLayout);
  //   // totalListLayout.textContent = `Total: ${this.totalSumOfCookies} cookies`;
};
createTable();
console.log(createTable);
new Store('1st and Pike', 23, 65, 6.3);
stores[0].generateHourlySales();
new Store('SeaTac Airport', 3, 24, 1.2);
stores[1].generateHourlySales();
new Store('Seattle Center', 11, 38, 3.7);
stores[2].generateHourlySales();
new Store('Capitol Hill', 20, 38, 2.3);
stores[3].generateHourlySales();
new Store('Alki', 2, 16, 4.6);
stores[4].generateHourlySales();
stores[0].render();
// console.log(stores);
// var storeOne = {
//   name: '1st and Pike',
//   minCust: 23,
//   maxCust: 65,
//   avgSale: 6.3,
//   hoursOfOperation: ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'],
//   perHour: [],
//   totalSumOfCookies: 0,
//   custPerHour: function () {
//     var sumOfCookies = 0;
//     for (var i = 0; i < this.hoursOfOperation.length; i++) {
//       var randomCustomer = Math.floor((Math.random() * (this.maxCust - this.minCust)) + this.minCust);
//       var cookiesPerHour = Math.floor(randomCustomer * this.avgSale);
//       this.totalSumOfCookies += cookiesPerHour;
//       console.log(sumOfCookies);
//       // this.perHour.push([hoursOfOperation[i], cookiesPerHour]);
//       console.log(this.hoursOfOperation[i], this.cookiesPerHour);
//       this.perHour.push(cookiesPerHour);
//     }
//     console.log(storeOne.perHour);
//   },
//   render() {
//     var container = document.createElement('section');
//     var nameEl = document.createElement('h3');
//     var orderedListLayout = document.createElement('ol');
//     container.appendChild(nameEl);
//     orderedListLayout.textContent = this.name;
//     container.appendChild(orderedListLayout);
//     var mainEl = document.getElementById('pikestore');
//     for (var i = 0; i < this.hoursOfOperation.length; i++) {
//       var listLayout = document.createElement('li');
//       listLayout.textContent = `${this.hoursOfOperation[i]}: ${this.perHour[i]} cookies`;
//       container.appendChild(listLayout);
//       mainEl.appendChild(container);
//     }
//     // var totalSum = this.perHour[i]; //placeholder
//     var totalListLayout = document.createElement('li');
//     container.appendChild(totalListLayout);
//     totalListLayout.textContent = `Total: ${this.totalSumOfCookies} cookies`;
//   }
// };
// storeOne.custPerHour();
// storeOne.render();
// console.log(storeOne);

// var storeTwo = {
//   name: 'SeaTac Airport',
//   minCust: 3,
//   maxCust: 24,
//   avgSale: 1.2,
//   perHour: [],
//   totalSumOfCookies: 0,
//   hoursOfOperation: ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'],
//   custPerHour: function () {
//     for (var i = 0; i < this.hoursOfOperation.length; i++) {
//       var randomCustomer = Math.floor((Math.random() * (this.maxCust - this.minCust)) + this.minCust);
//       var cookiesPerHour = Math.floor(randomCustomer * this.avgSale);
//       this.totalSumOfCookies += cookiesPerHour;
//       // this.totalSumofCookies.push(sumOfCookies);
//       // this.perHour.push([hoursOfOperation[i], cookiesPerHour]);
//       console.log([this.hoursOfOperation[i], cookiesPerHour]);
//       this.perHour.push(cookiesPerHour);
//       this.perHour.push(cookiesPerHour);
//     }
//     console.log(storeTwo.perHour);
//   },
//   render() {
//     var container = document.createElement('section');
//     var nameEl = document.createElement('h3');
//     var orderedListLayout = document.createElement('ol');
//     container.appendChild(nameEl);
//     orderedListLayout.textContent = this.name;
//     container.appendChild(orderedListLayout);
//     var mainEl = document.getElementById('pikestore');
//     for (var i = 0; i < this.hoursOfOperation.length; i++) {
//       var listLayout = document.createElement('li');
//       listLayout.textContent = `${this.hoursOfOperation[i]}: ${this.perHour[i]} cookies`;
//       container.appendChild(listLayout);
//       mainEl.appendChild(container);
//     }
//     // var totalSum = this.perHour[i]; //placeholder
//     var totalListLayout = document.createElement('li');
//     container.appendChild(totalListLayout);
//     totalListLayout.textContent = `Total: ${this.totalSumOfCookies} cookies`;
//   }
// };
// storeTwo.custPerHour();
// storeTwo.render();
// console.log(storeTwo);

// var storeThree = {
//   name: 'Seattle Center',
//   minCust: 11,
//   maxCust: 38,
//   avgSale: 3.7,
//   perHour: [],
//   totalSumOfCookies: 0,
//   hoursOfOperation: ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'],
//   custPerHour: function () {
//     for (var i = 0; i < this.hoursOfOperation.length; i++) {
//       var randomCustomer = Math.floor((Math.random() * (this.maxCust - this.minCust)) + this.minCust);
//       var cookiesPerHour = Math.floor(randomCustomer * this.avgSale);
//       this.totalSumOfCookies += cookiesPerHour;
//       console.log([this.hoursOfOperation[i], cookiesPerHour]);
//       this.perHour.push(cookiesPerHour);
//     }
//     console.log(storeThree.perHour);
//   },
//   render() {
//     var container = document.createElement('section');
//     var nameEl = document.createElement('h3');
//     var orderedListLayout = document.createElement('ol');
//     container.appendChild(nameEl);
//     orderedListLayout.textContent = this.name;
//     container.appendChild(orderedListLayout);
//     var mainEl = document.getElementById('pikestore');
//     for (var i = 0; i < this.hoursOfOperation.length; i++) {
//       var listLayout = document.createElement('li');
//       listLayout.textContent = `${this.hoursOfOperation[i]}: ${this.perHour[i]} cookies`;
//       container.appendChild(listLayout);
//       mainEl.appendChild(container);
//     }
//     // var totalSum = this.perHour[i];
//     var totalListLayout = document.createElement('li');
//     container.appendChild(totalListLayout);
//     totalListLayout.textContent = `Total: ${this.totalSumOfCookies} cookies`;
//   }
// };
// storeThree.custPerHour();
// storeThree.render();
// console.log(storeThree);

// var storeFour = {
//   name: 'Capitol Hill',
//   minCust: 20,
//   maxCust: 38,
//   avgSale: 2.3,
//   perHour: [],
//   totalSumOfCookies: 0,
//   hoursOfOperation: ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'],
//   custPerHour: function () {
//     for (var i = 0; i < this.hoursOfOperation.length; i++) {
//       var randomCustomer = Math.floor((Math.random() * (this.maxCust - this.minCust)) + this.minCust);
//       var cookiesPerHour = Math.floor(randomCustomer * this.avgSale);
//       this.totalSumOfCookies += cookiesPerHour;
//       console.log([this.hoursOfOperation[i], cookiesPerHour]);
//       this.perHour.push(cookiesPerHour);
//     }
//     console.log(storeFour.perHour);
//   },
//   render() {
//     var container = document.createElement('section');
//     var nameEl = document.createElement('h3');
//     var orderedListLayout = document.createElement('ol');
//     container.appendChild(nameEl);
//     orderedListLayout.textContent = this.name;
//     container.appendChild(orderedListLayout);
//     var mainEl = document.getElementById('pikestore');
//     for (var i = 0; i < this.hoursOfOperation.length; i++) {
//       var listLayout = document.createElement('li');
//       listLayout.textContent = `${this.hoursOfOperation[i]}: ${this.perHour[i]} cookies`;
//       container.appendChild(listLayout);
//       mainEl.appendChild(container);
//     }
//     // var totalSum = this.perHour[i];
//     var totalListLayout = document.createElement('li');
//     container.appendChild(totalListLayout);
//     totalListLayout.textContent = `Total: ${this.totalSumOfCookies} cookies`;
//   }
// };
// storeFour.custPerHour();
// storeFour.render();
// console.log(storeFour);

// var storeFive = {
//   name: 'Alki',
//   minCust: 2,
//   maxCust: 16,
//   avgSale: 4.6,
//   perHour: [],
//   totalSumOfCookies: 0,
//   hoursOfOperation: ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'],
//   custPerHour: function () {
//     for (var i = 0; i < this.hoursOfOperation.length; i++) {
//       var randomCustomer = Math.floor((Math.random() * (this.maxCust - this.minCust)) + this.minCust);
//       var cookiesPerHour = Math.floor(randomCustomer * this.avgSale);
//       this.totalSumOfCookies += cookiesPerHour;
//       console.log([this.hoursOfOperation[i], cookiesPerHour]);
//       this.perHour.push(cookiesPerHour);
//     }
//     console.log(storeFive.perHour);
//   },
//   render() {
//     var container = document.createElement('section');
//     var nameEl = document.createElement('h3');
//     var orderedListLayout = document.createElement('ol');
//     container.appendChild(nameEl);
//     orderedListLayout.textContent = this.name;
//     container.appendChild(orderedListLayout);
//     var mainEl = document.getElementById('pikestore');
//     for (var i = 0; i < this.hoursOfOperation.length; i++) {
//       var listLayout = document.createElement('li');
//       listLayout.textContent = `${this.hoursOfOperation[i]}: ${this.perHour[i]} cookies`;
//       container.appendChild(listLayout);
//       mainEl.appendChild(container);
//     }
//     // var totalSum = this.perHour[i];
//     var totalListLayout = document.createElement('li');
//     container.appendChild(totalListLayout);
//     totalListLayout.textContent = `Total: ${this.totalSumOfCookies} cookies`;
//   }
// };
// storeFive.custPerHour();
// storeFive.render();
// console.log(storeFive);