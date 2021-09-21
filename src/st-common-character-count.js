import { NotImplementedError } from "../extensions/index.js";

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let s1Arr = s1.split("");
  let s2Arr = s2.split("");
  let num = 0;
  let idx;
  for (let i = 0; i < s1Arr.length; i++) {
    if (s2Arr.includes(s1Arr[i])) {
      num++;
      idx = s2Arr.indexOf(s1Arr[i]);
      s2Arr.splice(idx, 1);
    }
  }

  return num;
  //console.log(s1Arr);
}
console.log(getCommonCharacterCount("aaa", "aa"));
//"mocha -r esm"
