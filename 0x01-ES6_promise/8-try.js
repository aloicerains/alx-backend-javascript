export default function divideFunction(numerator, denominator) {
  if (typeof (numerator) === 'number' || typeof (denominator) === 'number') {
    if (denominator === 0) {
      throw Error('cannot divide by 0');
    } return (numerator / denominator);
  }
}
