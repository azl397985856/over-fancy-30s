function isPrime(n) {
  if (n < 2) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function isPrimeAdvanced(n) {
  // 如果一个数是合数，那么它的最小质因数肯定小于等于他的平方根。

  // 时间少了一半
  if (n < 2) return false;

  const max = Math.sqrt(n);
  for (let i = 2; i <= max; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function isPrimeWithExtraSpace(n) {
  // 空间复杂度 O(n) , 时间复杂度O(logn)
  if (n < 2) return false;
  const primes = Array(n).fill(true);
  primes[1] = false;

  const max = Math.sqrt(n);
  for (let i = 2; i <= max; i++) {
    for(let j = i; i * j < n; j++) {
        // 我们这里不在需要去做整除运算了，计算上效率提升了，但是会浪费n的空间
        primes[i * j] = false;
    }
  }
  return primes[n];
}
