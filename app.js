var firstAndPike = {
  name: '1\'st and Pike',
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  custPerHour: function (minCust, maxCust) {
    var randomCustomer =  Math.floor((Math.random() * (this.maxCust - this.minCust)) + this.minCust);
    var cookiesPerHour = Math.floor(randomCustomer * this.avgSale); 
    return [randomCustomer, cookiesPerHour];
  },
};
firstAndPike.custPerHour();
