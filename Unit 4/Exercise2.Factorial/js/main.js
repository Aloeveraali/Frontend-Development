// Arrow function to calculate the factorial of a specific number
const fac = (num) => {
    let fac = 1;
    for (let i = 1; i <= num; i++) {
      fac *= i;
    }
    return fac;
  };
  
  // Function to calculate the factorials
  function factorial() {  
    // Declare variables
    let number = 0;
    let output = "";
  
    // Input
    number = parseInt(prompt("Enter a number between 1 and 20"));
    while (isNaN(number) || number <= 1 || number >= 20) {
      number = parseInt(prompt("Please enter a number between 1 and 20"));
    }
  
    // Calculate factorials using the arrow function
    output = "Factorials up to " + number + ": ";
    for (let j = number; j >= 1; j--) {
      output += j + "! = " + fac(j) + ", ";
    }
  
    // Output factorials
    alert(output);
  }
  
  // Call the main function
  factorial();
  