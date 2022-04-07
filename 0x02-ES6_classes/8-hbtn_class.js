export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  set size(val) {
    if (typeof (val) === 'number') {
      this._size = val;
    }
  }

  get location() {
    return this._location;
  }

  set location(val) {
    if (typeof (val) === 'string') {
      this._location = val;
    }
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this.size;
    }
    return this.location;
  }
}
