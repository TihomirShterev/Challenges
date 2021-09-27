function findPrimeDivisorsOf(n) {
  if (!Number.isInteger(n)) {
    throw new Error('Input must be an integer.');
  }

  if (n === 0) {
    throw new Error('All prime numbers are divisors of zero.');
  }

  if (n < 0) {
    n *= -1;
  }

  const primeDivisors = [];

  let currentDivisor = 2;

  while (n !== 1) {
    if ((n / currentDivisor) % 1 === 0) {
      n /= currentDivisor;

      if (!primeDivisors.includes(currentDivisor)) {
        primeDivisors.push(currentDivisor);
      }

    } else {
      currentDivisor++;
    }
  }

  return primeDivisors.join(', ');
}
