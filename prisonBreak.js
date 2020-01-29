// function prison(n, m, h, v) {
//   getBiggestOpenning = (arr) => {
//     let temp;
//     let streak;
//     let highestStreak = 0;
//     for (let i = 0; i < arr.length; i++) {
//       if (temp === arr[i]) {
//         streak++;
//       } else {
//         streak = 1;
//       }

//       temp = arr[i];

//       if (streak > highestStreak) {
//         highestStreak = streak;
//       }
//     }
//     return highestStreak;
//   }

//   let horizontal = [];
//   for (let i = 0; i < n; i++) {
//     horizontal.push(1);
//   }

//   h.forEach(index => {
//     horizontal[index - 1] = 0;
//   });

//   let horizontalOpenning = getBiggestOpenning(horizontal);


//   let vertical = [];
//   for (let i = 0; i < m; i++) {
//     vertical.push(1);
//   }

//   v.forEach(index => {
//     vertical[index - 1] = 0;
//   });

//   let verticalOpenning = getBiggestOpenning(vertical);

//   return (horizontalOpenning + 1) * (verticalOpenning + 1);
// }


function prison(n, m, h, v) {
  const largestGap = (arr) => {
    const barsToRemove = new Set(arr);
    let counts = {};
    let max = 1;

    for (const val of barsToRemove.values()) {
      let isCounting = true;
      let valPlusOne = val + 1;

      barsToRemove.delete(val);

      while (isCounting) {
        isCounting = false;
        while (barsToRemove.has(valPlusOne)) {
          let nextVal = valPlusOne++;
          barsToRemove.delete(nextVal);
        }

        if (counts[valPlusOne]) {
          isCounting = barsToRemove.has(valPlusOne += counts[valPlusOne])
        }

      }

      max = Math.max(counts[val] = valPlusOne - val, max);
    }
    return max + 1;
  }

  let longestH = largestGap(h);
  let longestV = largestGap(v);

  return (longestH) * (longestV);
}


console.log('+++++++++++++++++++++++++++++++');
let n1 = 3
let m1 = 3
let h1 = [2]
let v1 = [2]
let expected1 = 4
let res1 = prison(n1, m1, h1, v1);
console.log('res1 ==> 4 ==> ', res1);
console.log('+++++++++++++++++++++++++++++++');

let n2 = 2
let m2 = 2
let h2 = [1]
let v2 = [2]
let expected2 = 4
let res2 = prison(n2, m2, h2, v2);
console.log('res2 ==> 4 ==> ', res2);
console.log('+++++++++++++++++++++++++++++++');

let n3 = 3
let m3 = 2
let h3 = [1, 2, 3]
let v3 = [1, 2]
let expected3 = 12
let res3 = prison(n3, m3, h3, v3);
console.log('res3 ==> 12 ==> ', res3);
console.log('+++++++++++++++++++++++++++++++');

let n4 = 20
let m4 = 32
let h4 = [3, 6, 7, 8, 9]
let v4 = [9, 10, 11, 12, 25]
let expected4 = 25
let res4 = prison(n4, m4, h4, v4);
console.log('res4 ==> 25 ==> ', res4);
console.log('+++++++++++++++++++++++++++++++');