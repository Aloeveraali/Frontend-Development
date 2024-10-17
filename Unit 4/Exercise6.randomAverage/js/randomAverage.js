function randomAverage(n) {
    let sum = 0;
  
    // Generate n random numbers and add them to the sum
    for (let i = 0; i < n; i++) {
      sum += Math.random();
    }
  
    // Return the average
    return sum / n;
  }
  
  // Main program to display the results for different values of n
  function main() {
    const values = [1, 10, 100, 1000, 10000, 100000, 1000000];
  
    values.forEach(n => {
      console.log(`randomAverage(${n}) = ${randomAverage(n)}`);
    });
  }
  
  // Call the main function to execute the program
  main();
  