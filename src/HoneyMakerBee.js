var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = "make honey";
  this.honeyPot = 0;
  this.makeHoney = fuction() {
    this.honeyPot++;
  };
  this.giveHoney = fuction() {
    this.honeyPot--;
  }
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

