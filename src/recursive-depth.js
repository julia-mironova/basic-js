/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  constructor() {}

  calculateDepthNotRecursive(arr) {
    let numEl = 1;
    while (arr.some((s) => Array.isArray(s))) {
      numEl++;
      let arr2 = [];
      for (let i = 0; i < arr.length; i++) {
        let elem = arr[i];
        if (Array.isArray(elem)) {
          elem.forEach((e) => arr2.push(e));
        }
      }
      arr = arr2;
    }

    return numEl;
  }

  calculateDepth(arr) {
    if (!arr.some((s) => Array.isArray(s))) {
      return 1;
    } else {
      let arr2 = [];
      for (let i = 0; i < arr.length; i++) {
        let elem = arr[i];
        if (Array.isArray(elem)) {
          elem.forEach((e) => arr2.push(e));
        }
      }

      return 1 + this.calculateDepth(arr2);
    }
  }
}

let a = new DepthCalculator();

console.log(a.calculateDepth([1, [2, [3]], [1], 4, 5, [1]]));
