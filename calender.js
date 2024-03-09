//Part 1; Simple Calculator
function calculate(expression) {
    try {
      const result = eval(expression);
      return result;
    } catch (error) {
      return "Invalid expression. Please check your input.";
    }
  }
  
  // Testing the calculate function
  console.log(calculate("2 + 3"))
  console.log(calculate("17 - 5")) 
  console.log(calculate("13 * 4")) 
  console.log(calculate("46 / 2")) 
  console.log(calculate("10 / 0")) 
  
  // Part 2; Grading system
  function calculateGrade(score) {
    if (typeof score !== 'number' || isNaN(score)) {
      return 'Error: Please enter a valid number for the score.';
    }
  
    if (score >= 90 && score <= 100) {
      return 'A';
    } else if (score >= 80 && score <= 89) {
      return 'B';
    } else if (score >= 70 && score <= 79) {
      return 'C';
    } else if (score >= 60 && score <= 69) {
      return 'D';
    } else if (score >= 0 && score <= 59) {
      return 'F';
    } else {
      return 'Error: Please enter a number between 0 and 100 for the score.';
    }
  }
  
  // Testing the calculateGrade function
  console.log(calculateGrade(95)) 
  console.log(calculateGrade(85)) 
  console.log(calculateGrade(75)) 
  console.log(calculateGrade(65)) 
  console.log(calculateGrade(55)) 
  console.log(calculateGrade(105))
  console.log(calculateGrade('abc'))