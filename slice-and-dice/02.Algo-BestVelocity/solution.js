const sumSeq = (arr) => arr.reduce((acc, curr) => acc + curr);

function calcBestTotalVelocity(arr) {
  if (arr.length < 3) {
    throw new Error('error');
  } else {
    let maxSumArr = arr.slice(0, 3);
    let maxSum = sumSeq(maxSumArr);

    for (let i = 1; i < arr.length; i++) {
      if (i === arr.length - 2) {
        return `{ sequence: [${maxSumArr.join(', ')}], sum: ${maxSum} }`;
      }

      const currArr = arr.slice(i, i + 3)
      const currSum = sumSeq(currArr);

      if (currSum >= maxSum) {
        maxSumArr = currArr;
        maxSum = currSum;
      }
    }
  }
}

console.log(calcBestTotalVelocity([11, 14, 10, 12]));
console.log(calcBestTotalVelocity([12, 9, 1, 5, 11, 5]));
console.log(calcBestTotalVelocity([76, 80, 81, 77, 83, 78, 80]));
calcBestTotalVelocity([76, 80]);