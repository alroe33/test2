function isPrime(num) {
    // 1보다 작거나 같은 수는 소수가 아님
    if (num <= 1) {
        return false;
    }
    // 2부터 num-1까지의 수로 나누어 떨어지는지 확인
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; // 나누어 떨어진다면 소수가 아님
        }
    }
    return true; // 나누어 떨어지지 않으면 소수임
}
// 입력하는 함수 작성
function findPrimes(limit) {
    const primes = [];
    for (let number = 2; number <= limit; number++) {
        if (isPrime(number)) {
            primes.push(number);	//값 푸쉬
        }
    }
    return primes;
}

const limit = 100;
const primeNumbers = findPrimes(limit);

const resultDiv = document.getElementById('result');
resultDiv.innerHTML = `1부터 ${limit}까지의 소수: ${primeNumbers.join(', ')}`;