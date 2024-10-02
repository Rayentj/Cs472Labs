const computeSumOfSquares = (arr) => 
    arr.map(num => num ** 2).reduce((acc, curr) => acc + curr, 0);

// Example usage:
console.log(computeSumOfSquares([1, 2, 3])); // Output: 14


const printOddNumbersOnly = (arr) => {
    arr.filter(num => num % 2 !== 0).forEach(oddNum => console.log(oddNum));
};

// Example usage:
printOddNumbersOnly([1, 2, 3, 4, 5, 6]); // Output: 1 3 5



const printFibo = (n, a, b) => {
    let fibo = [a, b];

    while (fibo.length < n) {
        let next = fibo[fibo.length - 1] + fibo[fibo.length - 2];
        fibo.push(next);
    }

    console.log(fibo.slice(0, n).join(', '));
};

// Example usage:
printFibo(1, 0, 1);  // Output: "0"
printFibo(2, 0, 1);  // Output: "0, 1"
printFibo(3, 0, 1);  // Output: "0, 1, 1"
printFibo(6, 0, 1);  // Output: "0, 1, 1, 2, 3, 5"
printFibo(10, 0, 1); // Output: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34"

