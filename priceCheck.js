function priceCheck(products, productPrices, productSold, soldPrice) {
  let totalErrors = 0;
  soldPrice.forEach((price, i) => {
    let itemSold = productSold[i];
    let priceIndex = products.findIndex(product => product === itemSold);
    let correctPrice = productPrices[priceIndex];

    if (correctPrice !== price) {
      totalErrors++;
    }
  });

  return totalErrors;
}

console.log('++++++++++++++++++++++++++++++++++++');
let products1 = ['rice', 'sugar', 'wheat', 'cheese']
let prices1 = [16.89, 56.92, 20.89, 345.99]
let sold1 = ['rice', 'cheese']
let sPrice1 = [18.99, 400.89]
let expected1 = 2
let res1 = priceCheck(products1, prices1, sold1, sPrice1);

console.log('res1 ==> 2 ==> ', res1);
console.log('++++++++++++++++++++++++++++++++++++');

let products2 = ['chocolate', 'cheese', 'tomato']
let prices2 = [15, 300.9, 23.44]
let sold2 = ['cheese', 'tomato', 'chocolate']
let sPrice2 = [300.9, 23.44, 10]
let expexted2 = 1
let res2 = priceCheck(products2, prices2, sold2, sPrice2);
console.log('res2 ==> 1 ==> ', res2);
console.log('++++++++++++++++++++++++++++++++++++');

let products3 = ['toaster',
  'marker',
  'sanitizer',
  'tracks',
  'bottle',
  'stand',
  'adapter',
  'staple',
  'water',
  'wires']
let prices3 = [100.78212688799995,
  20.066673702062374,
  94.83868838020052,
  76.81190517349611,
  86.92530793466595,
  52.4514871306522,
  54.26374289000169,
  96.56913611950449,
  6.690542660921505,
  17.172357298482286]
let sold3 = ['stand',
  'staple',
  'water',
  'wires',
  'bottle',
  'marker',
  'sanitizer',
  'adapter',
  'toaster',
  'tracks']
let sPrice3 = [52.4514871306522,
  96.56913611950449,
  6.690542660921505,
  50.01372431999727,
  86.92530793466595,
  20.066673702062374,
  94.83868838020052,
  88.03965413375478,
  100.78212688799995,
  76.81190517349611]
let expected3 = 2
let res3 = priceCheck(products3, prices3, sold3, sPrice3)
console.log('res3 ==> 2 ==> ', res3);
console.log('++++++++++++++++++++++++++++++++++++');