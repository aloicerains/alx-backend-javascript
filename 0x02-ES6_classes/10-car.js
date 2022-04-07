export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(val) {
    if (typeof (val) === 'string') {
      this._brand = val;
    }
  }

  get motor() {
    return this._motor;
  }

  set motor(val) {
    if (typeof (val) === 'string') {
      this._motor = val;
    }
  }

  get color() {
    return this._color;
  }

  set color(val) {
    if (typeof (val) === 'string') {
      this._color = val;
    }
  }

  cloneCar() {
    const clone = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    return clone;
  }
}
