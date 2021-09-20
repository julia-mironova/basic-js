import { NotImplementedError } from "../extensions/index.js";

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr) {
  let arrWork = arr;
  let arrTransform = [];
  for (let i = 0; i < arrWork.length; i++) {
    let elem = arrWork[i];
    let elemNext = arrWork[i + 1];
    let elemPrev = arrWork[i - 1];
    if (typeof elem == "number") {
      arrTransform.push(elem);
    } else {
      switch (elem) {
        case "--discard-next":
          delete arrTransform[elemNext];
          break;
        case "--discard-prev":
          delete arrTransform[elemPrev];
          break;
        case "--double-prev":
          arrTransform.push(elemPrev);
          break;
        case "--double-next":
          arrTransform.push(elemNext);
          break;
      }
    }
  }
  console.log(arrWork);
  return arrTransform;
}
console.log(transform([3, 2, "--double-prev", 3, "--discard-prev", 4, 4]));
