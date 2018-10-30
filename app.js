// var hoursOfOperation = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'];
var storeOne = {
  name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  hoursOfOperation: ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'],
  perHour: [],
  totalSumOfCookies: 0,
  custPerHour: function () {
    var sumOfCookies = 0;
    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      var randomCustomer = Math.floor((Math.random() * (this.maxCust - this.minCust)) + this.minCust);
      var cookiesPerHour = Math.floor(randomCustomer * this.avgSale);
      this.totalSumOfCookies += cookiesPerHour;
      console.log(sumOfCookies);
      // this.perHour.push([hoursOfOperation[i], cookiesPerHour]);
      console.log(this.hoursOfOperation[i], this.cookiesPerHour);
      this.perHour.push(cookiesPerHour);
    }
    console.log(storeOne.perHour);
  },
  render() {
    var container = document.createElement('section');
    var nameEl = document.createElement('h3');
    var orderedListLayout = document.createElement('ol');
    container.appendChild(nameEl);
    orderedListLayout.textContent = this.name;
    container.appendChild(orderedListLayout);
    var mainEl = document.getElementById('pikestore');
    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      var listLayout = document.createElement('li');
      listLayout.textContent = `${this.hoursOfOperation[i]}: ${this.perHour[i]} cookies`;
      container.appendChild(listLayout);
      mainEl.appendChild(container);
    }
    // var totalSum = this.perHour[i]; //placeholder
    var totalListLayout = document.createElement('li');
    container.appendChild(totalListLayout);
    totalListLayout.textContent = `Total: ${this.totalSumOfCookies} cookies`;
  }
};
storeOne.custPerHour();
storeOne.render();
console.log(storeOne);

var storeTwo = {
  name: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  perHour: [],
  totalSumOfCookies: 0,
  hoursOfOperation: ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'],
  custPerHour: function () {
    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      var randomCustomer = Math.floor((Math.random() * (this.maxCust - this.minCust)) + this.minCust);
      var cookiesPerHour = Math.floor(randomCustomer * this.avgSale);
      this.totalSumOfCookies += cookiesPerHour;
      // this.totalSumofCookies.push(sumOfCookies);
      // this.perHour.push([hoursOfOperation[i], cookiesPerHour]);
      console.log([this.hoursOfOperation[i], cookiesPerHour]);
      this.perHour.push(cookiesPerHour);
      this.perHour.push(cookiesPerHour);
    }
    console.log(storeTwo.perHour);
  },
  render() {
    var container = document.createElement('section');
    var nameEl = document.createElement('h3');
    var orderedListLayout = document.createElement('ol');
    container.appendChild(nameEl);
    orderedListLayout.textContent = this.name;
    container.appendChild(orderedListLayout);
    var mainEl = document.getElementById('pikestore');
    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      var listLayout = document.createElement('li');
      listLayout.textContent = `${this.hoursOfOperation[i]}: ${this.perHour[i]} cookies`;
      container.appendChild(listLayout);
      mainEl.appendChild(container);
    }
    // var totalSum = this.perHour[i]; //placeholder
    var totalListLayout = document.createElement('li');
    container.appendChild(totalListLayout);
    totalListLayout.textContent = `Total: ${this.totalSumOfCookies} cookies`;
  }
};
storeTwo.custPerHour();
storeTwo.render();
console.log(storeTwo);

var storeThree = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
  perHour: [],
  totalSumOfCookies: 0,
  hoursOfOperation: ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'],
  custPerHour: function () {
    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      var randomCustomer = Math.floor((Math.random() * (this.maxCust - this.minCust)) + this.minCust);
      var cookiesPerHour = Math.floor(randomCustomer * this.avgSale);
      this.totalSumOfCookies += cookiesPerHour;
      console.log([this.hoursOfOperation[i], cookiesPerHour]);
      this.perHour.push(cookiesPerHour);
    }
    console.log(storeThree.perHour);
  },
  render() {
    var container = document.createElement('section');
    var nameEl = document.createElement('h3');
    var orderedListLayout = document.createElement('ol');
    container.appendChild(nameEl);
    orderedListLayout.textContent = this.name;
    container.appendChild(orderedListLayout);
    var mainEl = document.getElementById('pikestore');
    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      var listLayout = document.createElement('li');
      listLayout.textContent = `${this.hoursOfOperation[i]}: ${this.perHour[i]} cookies`;
      container.appendChild(listLayout);
      mainEl.appendChild(container);
    }
    // var totalSum = this.perHour[i];
    var totalListLayout = document.createElement('li');
    container.appendChild(totalListLayout);
    totalListLayout.textContent = `Total: ${this.totalSumOfCookies} cookies`;
  }
};
storeThree.custPerHour();
storeThree.render();
console.log(storeThree);

var storeFour = {
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
  perHour: [],
  totalSumOfCookies: 0,
  hoursOfOperation: ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'],
  custPerHour: function () {
    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      var randomCustomer = Math.floor((Math.random() * (this.maxCust - this.minCust)) + this.minCust);
      var cookiesPerHour = Math.floor(randomCustomer * this.avgSale);
      this.totalSumOfCookies += cookiesPerHour;
      console.log([this.hoursOfOperation[i], cookiesPerHour]);
      this.perHour.push(cookiesPerHour);
    }
    console.log(storeFour.perHour);
  },
  render() {
    var container = document.createElement('section');
    var nameEl = document.createElement('h3');
    var orderedListLayout = document.createElement('ol');
    container.appendChild(nameEl);
    orderedListLayout.textContent = this.name;
    container.appendChild(orderedListLayout);
    var mainEl = document.getElementById('pikestore');
    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      var listLayout = document.createElement('li');
      listLayout.textContent = `${this.hoursOfOperation[i]}: ${this.perHour[i]} cookies`;
      container.appendChild(listLayout);
      mainEl.appendChild(container);
    }
    // var totalSum = this.perHour[i];
    var totalListLayout = document.createElement('li');
    container.appendChild(totalListLayout);
    totalListLayout.textContent = `Total: ${this.totalSumOfCookies} cookies`;
  }
};
storeFour.custPerHour();
storeFour.render();
console.log(storeFour);

var storeFive = {
  name: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
  perHour: [],
  totalSumOfCookies: 0,
  hoursOfOperation: ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'],
  custPerHour: function () {
    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      var randomCustomer = Math.floor((Math.random() * (this.maxCust - this.minCust)) + this.minCust);
      var cookiesPerHour = Math.floor(randomCustomer * this.avgSale);
      this.totalSumOfCookies += cookiesPerHour;
      console.log([this.hoursOfOperation[i], cookiesPerHour]);
      this.perHour.push(cookiesPerHour);
    }
    console.log(storeFive.perHour);
  },
  render() {
    var container = document.createElement('section');
    var nameEl = document.createElement('h3');
    var orderedListLayout = document.createElement('ol');
    container.appendChild(nameEl);
    orderedListLayout.textContent = this.name;
    container.appendChild(orderedListLayout);
    var mainEl = document.getElementById('pikestore');
    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      var listLayout = document.createElement('li');
      listLayout.textContent = `${this.hoursOfOperation[i]}: ${this.perHour[i]} cookies`;
      container.appendChild(listLayout);
      mainEl.appendChild(container);
    }
    // var totalSum = this.perHour[i];
    var totalListLayout = document.createElement('li');
    container.appendChild(totalListLayout);
    totalListLayout.textContent = `Total: ${this.totalSumOfCookies} cookies`;
  }
};
storeFive.custPerHour();
storeFive.render();
console.log(storeFive);