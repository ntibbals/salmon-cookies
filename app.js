var hoursOfOperation = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'];
var storeOne = {
  name: '1\'st and Pike',
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  openHours: [],
  custPerHour: function () {
    for (var i = 0; i < hoursOfOperation.length; i++) {
      var randomCustomer = Math.floor((Math.random() * (this.maxCust - this.minCust)) + this.minCust);
      var cookiesPerHour = Math.floor(randomCustomer * this.avgSale);
      console.log([hoursOfOperation[i], cookiesPerHour]);
      this.openHours.push([hoursOfOperation[i], cookiesPerHour]);
      // this.openHours.push([hoursOfOperation[i], cookiesPerHour]);
      // console.log(this.openHours);
    }
  },
};
storeOne.custPerHour();
console.log(storeOne);

var storeTwo = {
  name: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  openHours: [],
  custPerHour: function () {
    for (var i = 0; i < hoursOfOperation.length; i++) {
      var randomCustomer = Math.floor((Math.random() * (this.maxCust - this.minCust)) + this.minCust);
      var cookiesPerHour = Math.floor(randomCustomer * this.avgSale);
      console.log([hoursOfOperation[i], cookiesPerHour]);
      this.openHours.push([hoursOfOperation[i], cookiesPerHour]);
      // this.openHours.push([hoursOfOperation[i], cookiesPerHour]);
      // console.log(this.openHours);
    }
  },
};
storeTwo.custPerHour();
console.log(storeTwo);

var storeThree = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
  openHours: [],
  custPerHour: function () {
    for (var i = 0; i < hoursOfOperation.length; i++) {
      var randomCustomer = Math.floor((Math.random() * (this.maxCust - this.minCust)) + this.minCust);
      var cookiesPerHour = Math.floor(randomCustomer * this.avgSale);
      console.log([hoursOfOperation[i], cookiesPerHour]);
      this.openHours.push([hoursOfOperation[i], cookiesPerHour]);
      // this.openHours.push([hoursOfOperation[i], cookiesPerHour]);
      // console.log(this.openHours);
    }
  },
};
storeThree.custPerHour();
console.log(storeThree);

var storeFour = {
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
  openHours: [],
  custPerHour: function () {
    for (var i = 0; i < hoursOfOperation.length; i++) {
      var randomCustomer = Math.floor((Math.random() * (this.maxCust - this.minCust)) + this.minCust);
      var cookiesPerHour = Math.floor(randomCustomer * this.avgSale);
      console.log([hoursOfOperation[i], cookiesPerHour]);
      this.openHours.push([hoursOfOperation[i], cookiesPerHour]);
      // this.openHours.push([hoursOfOperation[i], cookiesPerHour]);
      // console.log(this.openHours);
    }
  },
};
storeFour.custPerHour();
console.log(storeFour);

var storeFive = {
  name: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
  openHours: [],
  custPerHour: function () {
    for (var i = 0; i < hoursOfOperation.length; i++) {
      var randomCustomer = Math.floor((Math.random() * (this.maxCust - this.minCust)) + this.minCust);
      var cookiesPerHour = Math.floor(randomCustomer * this.avgSale);
      console.log([hoursOfOperation[i], cookiesPerHour]);
      this.openHours.push([hoursOfOperation[i], cookiesPerHour]);
      // this.openHours.push([hoursOfOperation[i], cookiesPerHour]);
      // console.log(this.openHours);
    }
  },
};
storeFive.custPerHour();
console.log(storeFive);
