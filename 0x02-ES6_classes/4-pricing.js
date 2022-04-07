export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(val) {
    if (typeof (val) === 'number') {
      this._amount = val;
    }
  }

  get currency() {
    return this._currency;
  }

  set currency(val) {
    if (typeof (val) === 'object') {
      this._currency = val;
    }
  }

  displayFullPrice() {
    const curency = this.currency.displayFullCurrency();
    return `${this.amount} ${curency}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof (amount) === 'number' && typeof (conversionRate) === 'number') {
      return (amount * conversionRate);
    }
  }
}
