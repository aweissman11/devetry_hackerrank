function shortestSubstring(s) {
  let chars = s.split('').filter(function (item, i, ar) { return ar.indexOf(item) === i; }).join('');
  const charSet = new Set(chars);
  if (s.length < chars.length) { return "" }
  var i = 0, start, minSize = s.length;
  done: while (i < s.length) {
    if (charSet.has(s[i])) {
      const check = new Set(chars);
      check.delete(s[i]);
      let j = i + 1;
      while (j < s.length) {
        if (check.has(s[j])) {
          check.delete(s[j]);
          if (check.size === 0) {
            if (j - i < minSize) {
              minSize = j - i + 1;
              start = i;
              if (minSize === chars.length || s.length - (i + 1) < minSize) {
                break done;
              }
            }
          }
        }
        j++
      }
    }
    i++;
    if (s.length - i < chars.length) { break }
  }
  return s.substring(start, start + minSize);
}


console.log('+++++++++++++++++++++++++++++++++++++++++++++`');
let str1 = 'bab';
let res1 = shortestSubstring(str1);
console.log('res1 ==> 2 ==> ', res1);
console.log('+++++++++++++++++++++++++++++++++++++++++++++');

let str2 = 'asdfkjeghfalawefhaef';
let res2 = shortestSubstring(str2);
console.log('res2 ==> 13 ==> ', res2);
console.log('+++++++++++++++++++++++++++++++++++++++++++++');

let str3 = [1, 2, 1];
let res3 = shortestSubstring(str3);
console.log('res3 ==> 1 ==> ', res3);
console.log('+++++++++++++++++++++++++++++++++++++++++++++');