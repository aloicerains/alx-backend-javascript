export default function divideFunction (numerator, denominator) {
  if (isNaN(numerator) || isNaN(denominator)) { return }
  if (denominator === 0) {
    throw Error('cannot divide by 0')
  } else return (numerator / denominator)
}
