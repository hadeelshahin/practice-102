//return sum of an array :

function sumUp(arrayNumbers) {
  let sum = 0;
  for (let i = 0; i < arrayNumbers.length; i++) {
    sum += arrayNumbers[i];
  }
  return sum;
}

const numbers = [1, 1, 1, 1, 1, 1, 5, 6, 6];
console.log(sumUp(numbers)); //23

const sumReduce = numbers.reduce((acc, curValye) => {
  return acc + curValye;
}, 0);
console.log(`using reduce method :${sumReduce}`);  //using reduce method :23
