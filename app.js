// var hoursOfOperation = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'];
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
Store.prototype.generateRandomCustPerHour = function (max, min) {
  for (var i = 0; i < this.hoursOfOps.length; i++) {
    var randomCust = Math.floor(Math.random() * (max - min + 1) + min);
    this.custPerHour.push(randomCust);
    console.log(randomCust);
  }
},
Store.prototype.generateHourlySales = function () {
  //line below will popluate custPerHour Array
  this.generateRandomCustPerHour(this.minCust, this.maxCust);
  for (var i = 0; i < this.hoursOfOps.length; i++) {
    var perHour = Math.round(this.custPerHour[i] * this.avgSale);
    this.cookiesPerHour.push(perHour);
    //this.dailyTotal= this.dailyTotal + perHour
    this.dailyTotal += perHour;
    console.log(perHour);
  }
};
// Store.prototype.render = function () {
//   var tbodyEl = document.getElementById('tbl-body');
//   var trEl = document.createElement('tr');
//   var thEl = document.createElement('th');
//   thEl.textContent = this.name;
//   trEl.appendChild(thEl);
  

//   var cookieEl = document.createElement('td');
//   var hoursEl = document.createElement('td');
  
//   cookieEl.textContent = this.cookiesPerHour;
//   hoursEl.textContent = this.hoursOfOps[0];

//   trEl.appendChild(cookieEl);
//   trEl.appendChild(hoursEl);

//   tbodyEl.appendChild(trEl);

// };
function createTable () {
  var mainEl = document.getElementById('pikestore');
  var tblEl = document.createElement('table');
  var theadEl = document.createElement('thead');
  var tbodyEl = document.createElement('body');
  var tfootEl = document.createElement('tfoot');

  mainEl.appendChild(tblEl);
  tblEl.appendChild(theadEl);
  tblEl.appendChild(tbodyEl);
  tblEl.appendChild(tfootEl);

  tblEl.id = 'table';
  theadEl.id = 'tbl-head';
  tbodyEl.id = 'tbl-body';
  tfootEl.id = 'tbl-foot';
  tblEl.className = 'tbl';
}
console.log(createTable);
createTable();
new Store('1st and Pike', 23, 65, 6.3);
stores[0].generateRandomCustPerHour();
console.log(stores);
// stores[0].render();
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