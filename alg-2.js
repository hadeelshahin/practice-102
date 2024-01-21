//to find out if a number is even or odd
//Time Complexity is O(1) : no matter which item we checked so the opertion time will be the same 
function isEveneOrOdd(number) {
  const result = number % 2;
  if (result === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(isEveneOrOdd(10)); //even
console.log(isEveneOrOdd(11)); //odd
console.log(isEveneOrOdd(5));
/// another shortetWay  :

function evenOdd(number) {
  return number % 2 ? "Odd" : "Even";
}

console.log(`shorter way: ${evenOdd(4)}`);

console.log(`shorter way: ${evenOdd(3)}`);
