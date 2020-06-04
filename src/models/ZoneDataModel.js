class ZoneDataModel {
  constructor(form) {
    this.userAge = parseInt(form.userAge);
    this.restRate = parseInt(form.restRate);
    this.maxRate = 220 - this.userAge;
    this.ratesDelta = this.maxRate - this.restRate;
    this.zones = [];
    this.zonesPercentage = [ [0.5, 0.6], [0.6, 0.7], [0.7, 0.8], [0.8, 0.9], [0.9, 1] ];
  }
  
  get calculateZones() {
    this.zonesPercentage.forEach(range => 
      this.zones.push(range.map(perc =>
        Math.round(this.ratesDelta * perc + this.restRate)
      )
    ));
    return this.zones;
  }
}

export default ZoneDataModel;
