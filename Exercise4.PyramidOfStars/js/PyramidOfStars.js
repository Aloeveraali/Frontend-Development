

function drawConsolePyramid(height) {
    const maxStars = height * 2 - 1; // Calculate the width of the bottom row
  
    for (let i = 1; i <= height; i++) {
      const stars = '*'.repeat(i * 2 - 1); // Calculate the number of stars for the current row
      const spaces = ' '.repeat((maxStars - stars.length) / 2); // Calculate leading spaces for centering
      console.log(spaces + stars); // Print the centered row
    }
  }
  
  // Example call:
  drawConsolePyramid(8);
  
