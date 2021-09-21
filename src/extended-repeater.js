import { NotImplementedError } from "../extensions/index.js";

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

export default function repeater(str, options) {
  let {
    repeatTimes = 0,
    separator = "+",
    addition = "",
    additionRepeatTimes = 0,
    additionSeparator = "|",
  } = options;
  let unswer = "";
  str = "" + str;
  addition = "" + addition;
  let unswerAddition = repitAdd(
    addition,
    additionSeparator,
    additionRepeatTimes
  );
  let newStr = str + unswerAddition;
  unswer = repitAdd(newStr, separator, repeatTimes);
  return unswer;
}

function repitAdd(str, sep, times) {
  if (times === 0) {
    times = 1;
  }
  let repited = "";
  let repSep = "" + str + sep;
  let symbolslice = (str.length + sep.length) * times - sep.length;
  repited = repSep.repeat(times);
  repited = repited.slice(0, symbolslice);
  return repited;
}
console.log(repeater("la", { repeatTimes: 3 })); //TESTstrADD!
