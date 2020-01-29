function balancedSum(sales) {
  let rightSum = 0;
  let leftSum = 0;

  sales.forEach((int, i) => {
    if (i > 0) {
      rightSum += int;
    }
  });

  for (let i = 0, j = 1; j < sales.length; j++ , i++) {
    leftSum += sales[i];
    rightSum -= sales[j]

    if (leftSum === rightSum) {
      return j;
    }
  }
}

console.log('+++++++++++++++++++++++++++++++++++++++++++++`');
let arr1 = [1, 2, 3, 4, 6];
let res1 = balancedSum(arr1);
console.log('res1 ==> 3 ==> ', res1);
console.log('+++++++++++++++++++++++++++++++++++++++++++++');

let arr2 = [1, 2, 3, 3];
let res2 = balancedSum(arr2);
console.log('res2 ==> 2 ==> ', res2);
console.log('+++++++++++++++++++++++++++++++++++++++++++++');

let arr3 = [1, 2, 1];
let res3 = balancedSum(arr3);
console.log('res3 ==> 1 ==> ', res3);
console.log('+++++++++++++++++++++++++++++++++++++++++++++');