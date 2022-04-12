export default function cleanSet(set, startString) {
  if (typeof (set) !== 'object' || typeof (startString) !== 'string'
    || startString.length === 0) return '';

  const strin = [];
  [...set].forEach((val) => {
    if (val && val.indexOf(startString) === 0) {
      strin.push(val.replace(startString, ''));
    }
  });
  return strin.join('-');
}
