var hoursOfOperation = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'];
var firstAndPike = {
  name: '1\'st and Pike',
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  custPerHour: function () {
    var randomCustomer = Math.floor((Math.random() * (this.maxCust - this.minCust)) + this.minCust);
    console.log(randomCustomer);
    var cookiesPerHour = Math.floor(randomCustomer * this.avgSale);
    console.log(cookiesPerHour);
    // for (var i = 0; i < hoursOfOperation.length; i++) {
    //   console.log([hoursOfOperation[i], cookiesPerHour]);
    // }
  }
};
firstAndPike.custPerHour();