export default function hasValuesFromArray(set, array) {
  let bool = 1;
  for (let i = 0; i < array.length; i += 1) {
    if (set.has(array[i])) {
      bool *= 1;
    } else bool *= 0;
  }
  if (bool === 1) { return true; }
  return false;
}
