class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.minNum = min;
    this.maxNum = max;
  }

  guess() {
    this.midNum = Math.ceil((this.minNum + this.maxNum)/2);
    return this.midNum;
  }

  lower() {
    this.maxNum =  this.midNum;
  }

  greater() {
    this.minNum = this.midNum;
  }
}

module.exports = GuessingGame;