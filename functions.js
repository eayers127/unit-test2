
function fizzBuzz(n) {
    if (n % 3 === 0 && n % 5 === 0) {
      return 'FizzBuzz';
    } else if (n % 3 === 0) {
      return 'Fizz';
    } else if (n % 5 === 0) {
      return 'Buzz';
    } else {
      return n.toString();
    }
  }
  module.exports = fizzBuzz;

function addition(a,b){
    return a + b;
}
module.exports = addition;

function subtract(c,d){
    return c - d;
}
module.exports = subtract;

function multiply(e,f){
    return e * f;
}
module.exports = multiply;

function divide(g,h){
    return g/h;
}
module.exports = divide;

function power(x,n){
    let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}
module.exports = power;

function root(h){
    let result = Math.sqrt(h);
    return Math.round(result);
}
module.exports = root;

function validator(obj, key) {
    return Object.keys(obj).includes(key);
  }

  myObj = {color: 'blue', size: 'large'};
module.exports = validator;

function numbers(arrayNumber){
    let total = 0;
    for (let i = 0; i < arrayNumber.length; i++) {
    total += arrayNumber[i];
    }
  return total;
}

module.exports = numbers;