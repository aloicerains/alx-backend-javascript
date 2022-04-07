import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
  }

  get range() {
    return this._range;
  }

  set range(val) {
    if (typeof (val) === 'string') {
      this._range = val;
    }
  }

  // Object.defineProperty(EVCar.prototype, 'cloneCar', {});
  cloneCar() {
    delete this.brand;
    delete this.motor;
    delete this.color;
  }
}
