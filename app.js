var firstAndPike = {
  name: '1\'st and Pike',
  minCust: 23,
  maxCust: 65
  avgSale: 6.3,
  custPerHour: function(minCust, maxCust0) {
    return Math.floor(Math.random() * (this.minCust - this.maxCust) + this.minCust);
  },
  per () {
    var cookiesPerHour = storeOne.custPerHour() * this.avgCookies;
  }
};
