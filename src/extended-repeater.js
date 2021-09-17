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
/*let {
  repeatTimes,
  separator = "+",
  addition = 1,
  additionRepeatTimes,
  additionSeparator = "|",
} = options;
//export default
function repeater(str, options) {
  let unswer = "";
  if (
    options.repeatTimes == undefined ||
    options.additionRepeatTimes == undefined
  ) {
    unswer = str;
    return unswer;
  } else {
    let str = str.toString();
    let addition = "" + options.addition;
    unswer;
  }
}*/
//console.log(repeater("la", { repeatTimes: 3 }));

function repitAdd(str, sep, times) {
  let repited = "";
  let repSep = "" + str + sep;
  let symbolslice = (str.length + sep.length) * times - sep.length;
  repited = repSep.repeat(times);
  repited = repited.slice(0, symbolslice);
  return repited;
}
console.log(repitAdd("cat", "!!", 2));

//repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS',
//additionRepeatTimes: 3, additionSeparator: '00' })
//=> 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
