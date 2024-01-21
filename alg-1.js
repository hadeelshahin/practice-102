// //to return the minumm number
 
function getMin(arrayNumbers) {  //linear time comlexity o(n)
  if (arrayNumbers.length === 0) {
    throw new Error("Empty Array");
  }

  if (arrayNumbers.length === 1) {
    return arrayNumbers[0];
  }

  let minNumber = arrayNumbers[0];
  for (let i = 1; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] <= minNumber) minNumber = arrayNumbers[i];
    return minNumber;
  }
}

const array=[2,1,3];
const min = getMin(array);
console.log(min);
const array2 = [];
 min = array.sort()[0];
console.log(`first min : ${min}`);
//next Min
const nextMin = array.sort()[1];
console.log(`next min :  ${nextMin}`);
/********************************************************************************************** */
//Sort Logic

function sortFun(arrayNumbers) {   //quadratic time comlexity O(n2)
  //the point is to sort any array
  if (arrayNumbers.length === 0) {
    throw new Error("EMPTY ARRAY-NOT VALID!");
  }

  let outerElement;
  for (let i = 0; i < arrayNumbers.length; i++) {
    outerElement = arrayNumbers[i];
    for (let j = i + 1; j < arrayNumbers.length; j++) {
      let innerElement = arrayNumbers[j];

      if (outerElement > innerElement) {
        //shift and swap
        arrayNumbers[i] = innerElement;
        arrayNumbers[j] = outerElement;

        outerElement = arrayNumbers[i];
        innerElement = arrayNumbers[j];
      }
    }
    return arrayNumbers[0];
  }
}
console.log(sortFun(array));
