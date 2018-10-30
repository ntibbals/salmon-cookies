var hoursOfOperation = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'];
var storeOne = {
  name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  perHour: [],
  custPerHour: function () {
    for (var i = 0; i < hoursOfOperation.length; i++) {
      var randomCustomer = Math.floor((Math.random() * (this.maxCust - this.minCust)) + this.minCust);
      var cookiesPerHour = Math.floor(randomCustomer * this.avgSale);
      // this.perHour.push([hoursOfOperation[i], cookiesPerHour]);
      console.log([hoursOfOperation[i], cookiesPerHour]);
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
    for (var i = 0; i < hoursOfOperation.length; i++) {
      var listLayout = document.createElement('li');
      listLayout.textContent = `${hoursOfOperation[i]}: ${this.perHour[i]} cookies`;
      container.appendChild(listLayout);
      mainEl.appendChild(container);
    }
    // var totalSum = this.perHour[i]; //placeholder
    var totalListLayout = document.createElement('li');
    container.appendChild(totalListLayout);
    totalListLayout.textContent = `Total: ${this.cookieSum} cookies`;
  }
};
storeOne.render();
storeOne.custPerHour();
console.log(storeOne);

var storeTwo = {
  name: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  perHour: [],
  custPerHour: function () {
    for (var i = 0; i < hoursOfOperation.length; i++) {
      var randomCustomer = Math.floor((Math.random() * (this.maxCust - this.minCust)) + this.minCust);
      var cookiesPerHour = Math.floor(randomCustomer * this.avgSale);
      // this.perHour.push([hoursOfOperation[i], cookiesPerHour]);
      console.log([hoursOfOperation[i], cookiesPerHour]);
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
    for (var i = 0; i < hoursOfOperation.length; i++) {
      var listLayout = document.createElement('li');
      listLayout.textContent = `${hoursOfOperation[i]}: ${this.perHour[i]} cookies`;
      container.appendChild(listLayout);
      mainEl.appendChild(container);
    }
    // var totalSum = this.perHour[i]; //placeholder
    var totalListLayout = document.createElement('li');
    container.appendChild(totalListLayout);
    totalListLayout.textContent = `Total: ${this.cookieSum} cookies`;
  }
};
storeTwo.render();
storeTwo.custPerHour();
console.log(storeTwo);

var storeThree = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
  perHour: [],
  custPerHour: function () {
    for (var i = 0; i < hoursOfOperation.length; i++) {
      var randomCustomer = Math.floor((Math.random() * (this.maxCust - this.minCust)) + this.minCust);
      var cookiesPerHour = Math.floor(randomCustomer * this.avgSale);
      console.log([hoursOfOperation[i], cookiesPerHour]);
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
    for (var i = 0; i < hoursOfOperation.length; i++) {
      var listLayout = document.createElement('li');
      listLayout.textContent = `${hoursOfOperation[i]}: ${this.perHour[i]} cookies`;
      container.appendChild(listLayout);
      mainEl.appendChild(container);
    }
    // var totalSum = this.perHour[i];
    var totalListLayout = document.createElement('li');
    container.appendChild(totalListLayout);
    totalListLayout.textContent = `Total: ${this.cookieSum} cookies`;
  }
};
storeThree.render();
storeThree.custPerHour();
console.log(storeThree);

var storeFour = {
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
  perHour: [],
  custPerHour: function () {
    for (var i = 0; i < hoursOfOperation.length; i++) {
      var randomCustomer = Math.floor((Math.random() * (this.maxCust - this.minCust)) + this.minCust);
      var cookiesPerHour = Math.floor(randomCustomer * this.avgSale);
      console.log([hoursOfOperation[i], cookiesPerHour]);
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
    for (var i = 0; i < hoursOfOperation.length; i++) {
      var listLayout = document.createElement('li');
      listLayout.textContent = `${hoursOfOperation[i]}: ${this.perHour[i]} cookies`;
      container.appendChild(listLayout);
      mainEl.appendChild(container);
    }
    // var totalSum = this.perHour[i];
    var totalListLayout = document.createElement('li');
    container.appendChild(totalListLayout);
    totalListLayout.textContent = `Total: ${this.cookieSum} cookies`;
  }
};
storeFour.render();
storeFour.custPerHour();
console.log(storeFour);

var storeFive = {
  name: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
  perHour: [],
  custPerHour: function () {
    for (var i = 0; i < hoursOfOperation.length; i++) {
      var randomCustomer = Math.floor((Math.random() * (this.maxCust - this.minCust)) + this.minCust);
      var cookiesPerHour = Math.floor(randomCustomer * this.avgSale);
      console.log([hoursOfOperation[i], cookiesPerHour]);
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
    for (var i = 0; i < hoursOfOperation.length; i++) {
      var listLayout = document.createElement('li');
      listLayout.textContent = `${hoursOfOperation[i]}: ${this.perHour[i]} cookies`;
      container.appendChild(listLayout);
      mainEl.appendChild(container);
    }
    // var totalSum = this.perHour[i];
    var totalListLayout = document.createElement('li');
    container.appendChild(totalListLayout);
    totalListLayout.textContent = `Total: ${this.cookieSum} cookies`;
  }
};
storeFive.render();
storeFive.custPerHour();
console.log(storeFive);
